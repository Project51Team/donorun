import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';

import { ITransactionGroup, TransactionGroup } from '../transaction-group.model';
import { TransactionGroupService } from '../service/transaction-group.service';
import { IMoneyRecipient } from 'app/entities/money-recipient/money-recipient.model';
import { MoneyRecipientService } from 'app/entities/money-recipient/service/money-recipient.service';

@Component({
  selector: 'jhi-transaction-group-update',
  templateUrl: './transaction-group-update.component.html',
})
export class TransactionGroupUpdateComponent implements OnInit {
  isSaving = false;

  moneyRecipientsSharedCollection: IMoneyRecipient[] = [];

  editForm = this.fb.group({
    id: [],
    amountOfMoney: [],
    message: [],
    wasPaid: [],
    dateOfPayment: [],
    createdDate: [],
    recipient: [],
  });

  constructor(
    protected transactionGroupService: TransactionGroupService,
    protected moneyRecipientService: MoneyRecipientService,
    protected activatedRoute: ActivatedRoute,
    protected fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ transactionGroup }) => {
      if (transactionGroup.id === undefined) {
        const today = dayjs().startOf('day');
        transactionGroup.dateOfPayment = today;
        transactionGroup.createdDate = today;
      }

      this.updateForm(transactionGroup);

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const transactionGroup = this.createFromForm();
    if (transactionGroup.id !== undefined) {
      this.subscribeToSaveResponse(this.transactionGroupService.update(transactionGroup));
    } else {
      this.subscribeToSaveResponse(this.transactionGroupService.create(transactionGroup));
    }
  }

  trackMoneyRecipientById(_index: number, item: IMoneyRecipient): string {
    return item.id!;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITransactionGroup>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(transactionGroup: ITransactionGroup): void {
    this.editForm.patchValue({
      id: transactionGroup.id,
      amountOfMoney: transactionGroup.amountOfMoney,
      message: transactionGroup.message,
      wasPaid: transactionGroup.wasPaid,
      dateOfPayment: transactionGroup.dateOfPayment ? transactionGroup.dateOfPayment.format(DATE_TIME_FORMAT) : null,
      createdDate: transactionGroup.createdDate ? transactionGroup.createdDate.format(DATE_TIME_FORMAT) : null,
      recipient: transactionGroup.recipient,
    });

    this.moneyRecipientsSharedCollection = this.moneyRecipientService.addMoneyRecipientToCollectionIfMissing(
      this.moneyRecipientsSharedCollection,
      transactionGroup.recipient
    );
  }

  protected loadRelationshipsOptions(): void {
    this.moneyRecipientService
      .query()
      .pipe(map((res: HttpResponse<IMoneyRecipient[]>) => res.body ?? []))
      .pipe(
        map((moneyRecipients: IMoneyRecipient[]) =>
          this.moneyRecipientService.addMoneyRecipientToCollectionIfMissing(moneyRecipients, this.editForm.get('recipient')!.value)
        )
      )
      .subscribe((moneyRecipients: IMoneyRecipient[]) => (this.moneyRecipientsSharedCollection = moneyRecipients));
  }

  protected createFromForm(): ITransactionGroup {
    return {
      ...new TransactionGroup(),
      id: this.editForm.get(['id'])!.value,
      amountOfMoney: this.editForm.get(['amountOfMoney'])!.value,
      message: this.editForm.get(['message'])!.value,
      wasPaid: this.editForm.get(['wasPaid'])!.value,
      dateOfPayment: this.editForm.get(['dateOfPayment'])!.value
        ? dayjs(this.editForm.get(['dateOfPayment'])!.value, DATE_TIME_FORMAT)
        : undefined,
      createdDate: this.editForm.get(['createdDate'])!.value
        ? dayjs(this.editForm.get(['createdDate'])!.value, DATE_TIME_FORMAT)
        : undefined,
      recipient: this.editForm.get(['recipient'])!.value,
    };
  }
}
