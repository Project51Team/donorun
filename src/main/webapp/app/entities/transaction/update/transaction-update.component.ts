import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';

import { ITransaction, Transaction } from '../transaction.model';
import { TransactionService } from '../service/transaction.service';
import { IMoneyRecipient } from 'app/entities/money-recipient/money-recipient.model';
import { MoneyRecipientService } from 'app/entities/money-recipient/service/money-recipient.service';
import { IActivity } from 'app/entities/activity/activity.model';
import { ActivityService } from 'app/entities/activity/service/activity.service';

@Component({
  selector: 'jhi-transaction-update',
  templateUrl: './transaction-update.component.html',
})
export class TransactionUpdateComponent implements OnInit {
  isSaving = false;

  moneyRecipientsSharedCollection: IMoneyRecipient[] = [];
  activitiesSharedCollection: IActivity[] = [];

  editForm = this.fb.group({
    id: [],
    sumOfMoney: [],
    message: [],
    wasPaid: [],
    dateOfPayment: [],
    createdDate: [],
    recipient: [],
    activities: [],
  });

  constructor(
    protected transactionService: TransactionService,
    protected moneyRecipientService: MoneyRecipientService,
    protected activityService: ActivityService,
    protected activatedRoute: ActivatedRoute,
    protected fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ transaction }) => {
      if (transaction.id === undefined) {
        const today = dayjs().startOf('day');
        transaction.dateOfPayment = today;
        transaction.createdDate = today;
      }

      this.updateForm(transaction);

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const transaction = this.createFromForm();
    if (transaction.id !== undefined) {
      this.subscribeToSaveResponse(this.transactionService.update(transaction));
    } else {
      this.subscribeToSaveResponse(this.transactionService.create(transaction));
    }
  }

  trackMoneyRecipientById(_index: number, item: IMoneyRecipient): string {
    return item.id!;
  }

  trackActivityById(_index: number, item: IActivity): string {
    return item.id!;
  }

  getSelectedActivity(option: IActivity, selectedVals?: IActivity[]): IActivity {
    if (selectedVals) {
      for (const selectedVal of selectedVals) {
        if (option.id === selectedVal.id) {
          return selectedVal;
        }
      }
    }
    return option;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITransaction>>): void {
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

  protected updateForm(transaction: ITransaction): void {
    this.editForm.patchValue({
      id: transaction.id,
      sumOfMoney: transaction.sumOfMoney,
      message: transaction.message,
      wasPaid: transaction.wasPaid,
      dateOfPayment: transaction.dateOfPayment ? transaction.dateOfPayment.format(DATE_TIME_FORMAT) : null,
      createdDate: transaction.createdDate ? transaction.createdDate.format(DATE_TIME_FORMAT) : null,
      recipient: transaction.recipient,
      activities: transaction.activities,
    });

    this.moneyRecipientsSharedCollection = this.moneyRecipientService.addMoneyRecipientToCollectionIfMissing(
      this.moneyRecipientsSharedCollection,
      transaction.recipient
    );
    this.activitiesSharedCollection = this.activityService.addActivityToCollectionIfMissing(
      this.activitiesSharedCollection,
      ...(transaction.activities ?? [])
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

    this.activityService
      .query()
      .pipe(map((res: HttpResponse<IActivity[]>) => res.body ?? []))
      .pipe(
        map((activities: IActivity[]) =>
          this.activityService.addActivityToCollectionIfMissing(activities, ...(this.editForm.get('activities')!.value ?? []))
        )
      )
      .subscribe((activities: IActivity[]) => (this.activitiesSharedCollection = activities));
  }

  protected createFromForm(): ITransaction {
    return {
      ...new Transaction(),
      id: this.editForm.get(['id'])!.value,
      sumOfMoney: this.editForm.get(['sumOfMoney'])!.value,
      message: this.editForm.get(['message'])!.value,
      wasPaid: this.editForm.get(['wasPaid'])!.value,
      dateOfPayment: this.editForm.get(['dateOfPayment'])!.value
        ? dayjs(this.editForm.get(['dateOfPayment'])!.value, DATE_TIME_FORMAT)
        : undefined,
      createdDate: this.editForm.get(['createdDate'])!.value
        ? dayjs(this.editForm.get(['createdDate'])!.value, DATE_TIME_FORMAT)
        : undefined,
      recipient: this.editForm.get(['recipient'])!.value,
      activities: this.editForm.get(['activities'])!.value,
    };
  }
}
