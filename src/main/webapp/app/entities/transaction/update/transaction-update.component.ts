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
import { IActivity } from 'app/entities/activity/activity.model';
import { ActivityService } from 'app/entities/activity/service/activity.service';
import { ITransactionGroup } from 'app/entities/transaction-group/transaction-group.model';
import { TransactionGroupService } from 'app/entities/transaction-group/service/transaction-group.service';

@Component({
  selector: 'jhi-transaction-update',
  templateUrl: './transaction-update.component.html',
})
export class TransactionUpdateComponent implements OnInit {
  isSaving = false;

  activitiesCollection: IActivity[] = [];
  transactionGroupsSharedCollection: ITransactionGroup[] = [];

  editForm = this.fb.group({
    id: [],
    amountOfMoney: [],
    createdDate: [],
    activity: [],
    transactionGroup: [],
  });

  constructor(
    protected transactionService: TransactionService,
    protected activityService: ActivityService,
    protected transactionGroupService: TransactionGroupService,
    protected activatedRoute: ActivatedRoute,
    protected fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ transaction }) => {
      if (transaction.id === undefined) {
        const today = dayjs().startOf('day');
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

  trackActivityById(_index: number, item: IActivity): string {
    return item.id!;
  }

  trackTransactionGroupById(_index: number, item: ITransactionGroup): string {
    return item.id!;
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
      amountOfMoney: transaction.amountOfMoney,
      createdDate: transaction.createdDate ? transaction.createdDate.format(DATE_TIME_FORMAT) : null,
      activity: transaction.activity,
      transactionGroup: transaction.transactionGroup,
    });

    this.activitiesCollection = this.activityService.addActivityToCollectionIfMissing(this.activitiesCollection, transaction.activity);
    this.transactionGroupsSharedCollection = this.transactionGroupService.addTransactionGroupToCollectionIfMissing(
      this.transactionGroupsSharedCollection,
      transaction.transactionGroup
    );
  }

  protected loadRelationshipsOptions(): void {
    this.activityService
      .query({ filter: 'transaction-is-null' })
      .pipe(map((res: HttpResponse<IActivity[]>) => res.body ?? []))
      .pipe(
        map((activities: IActivity[]) =>
          this.activityService.addActivityToCollectionIfMissing(activities, this.editForm.get('activity')!.value)
        )
      )
      .subscribe((activities: IActivity[]) => (this.activitiesCollection = activities));

    this.transactionGroupService
      .query()
      .pipe(map((res: HttpResponse<ITransactionGroup[]>) => res.body ?? []))
      .pipe(
        map((transactionGroups: ITransactionGroup[]) =>
          this.transactionGroupService.addTransactionGroupToCollectionIfMissing(
            transactionGroups,
            this.editForm.get('transactionGroup')!.value
          )
        )
      )
      .subscribe((transactionGroups: ITransactionGroup[]) => (this.transactionGroupsSharedCollection = transactionGroups));
  }

  protected createFromForm(): ITransaction {
    return {
      ...new Transaction(),
      id: this.editForm.get(['id'])!.value,
      amountOfMoney: this.editForm.get(['amountOfMoney'])!.value,
      createdDate: this.editForm.get(['createdDate'])!.value
        ? dayjs(this.editForm.get(['createdDate'])!.value, DATE_TIME_FORMAT)
        : undefined,
      activity: this.editForm.get(['activity'])!.value,
      transactionGroup: this.editForm.get(['transactionGroup'])!.value,
    };
  }
}
