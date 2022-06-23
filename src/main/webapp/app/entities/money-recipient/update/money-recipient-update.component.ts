import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { IMoneyRecipient, MoneyRecipient } from '../money-recipient.model';
import { MoneyRecipientService } from '../service/money-recipient.service';
import { RecipientType } from 'app/entities/enumerations/recipient-type.model';

@Component({
  selector: 'jhi-money-recipient-update',
  templateUrl: './money-recipient-update.component.html',
})
export class MoneyRecipientUpdateComponent implements OnInit {
  isSaving = false;
  recipientTypeValues = Object.keys(RecipientType);

  editForm = this.fb.group({
    id: [],
    name: [],
    description: [],
    avatarUrl: [],
    siteUrl: [],
    recipientType: [],
    accountDetails: [],
  });

  constructor(
    protected moneyRecipientService: MoneyRecipientService,
    protected activatedRoute: ActivatedRoute,
    protected fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ moneyRecipient }) => {
      this.updateForm(moneyRecipient);
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const moneyRecipient = this.createFromForm();
    if (moneyRecipient.id !== undefined) {
      this.subscribeToSaveResponse(this.moneyRecipientService.update(moneyRecipient));
    } else {
      this.subscribeToSaveResponse(this.moneyRecipientService.create(moneyRecipient));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IMoneyRecipient>>): void {
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

  protected updateForm(moneyRecipient: IMoneyRecipient): void {
    this.editForm.patchValue({
      id: moneyRecipient.id,
      name: moneyRecipient.name,
      description: moneyRecipient.description,
      avatarUrl: moneyRecipient.avatarUrl,
      siteUrl: moneyRecipient.siteUrl,
      recipientType: moneyRecipient.recipientType,
      accountDetails: moneyRecipient.accountDetails,
    });
  }

  protected createFromForm(): IMoneyRecipient {
    return {
      ...new MoneyRecipient(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
      description: this.editForm.get(['description'])!.value,
      avatarUrl: this.editForm.get(['avatarUrl'])!.value,
      siteUrl: this.editForm.get(['siteUrl'])!.value,
      recipientType: this.editForm.get(['recipientType'])!.value,
      accountDetails: this.editForm.get(['accountDetails'])!.value,
    };
  }
}
