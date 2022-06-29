import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';

import { IFitnessAccount, FitnessAccount } from '../fitness-account.model';
import { FitnessAccountService } from '../service/fitness-account.service';
import { IUser } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/user.service';
import { FitnessAccountType } from 'app/entities/enumerations/fitness-account-type.model';

@Component({
  selector: 'jhi-fitness-account-update',
  templateUrl: './fitness-account-update.component.html',
})
export class FitnessAccountUpdateComponent implements OnInit {
  isSaving = false;
  fitnessAccountTypeValues = Object.keys(FitnessAccountType);

  usersSharedCollection: IUser[] = [];

  editForm = this.fb.group({
    id: [],
    fitnessAccountType: [],
    url: [],
    nickname: [],
    isActive: [],
    createdDate: [],
    employee: [],
  });

  constructor(
    protected fitnessAccountService: FitnessAccountService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    protected fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ fitnessAccount }) => {
      if (fitnessAccount.id === undefined) {
        const today = dayjs().startOf('day');
        fitnessAccount.createdDate = today;
      }

      this.updateForm(fitnessAccount);

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const fitnessAccount = this.createFromForm();
    if (fitnessAccount.id !== undefined) {
      this.subscribeToSaveResponse(this.fitnessAccountService.update(fitnessAccount));
    } else {
      this.subscribeToSaveResponse(this.fitnessAccountService.create(fitnessAccount));
    }
  }

  trackUserById(_index: number, item: IUser): number {
    return item.id!;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IFitnessAccount>>): void {
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

  protected updateForm(fitnessAccount: IFitnessAccount): void {
    this.editForm.patchValue({
      id: fitnessAccount.id,
      fitnessAccountType: fitnessAccount.fitnessAccountType,
      url: fitnessAccount.url,
      nickname: fitnessAccount.nickname,
      isActive: fitnessAccount.isActive,
      createdDate: fitnessAccount.createdDate ? fitnessAccount.createdDate.format(DATE_TIME_FORMAT) : null,
      employee: fitnessAccount.employee,
    });

    this.usersSharedCollection = this.userService.addUserToCollectionIfMissing(this.usersSharedCollection, fitnessAccount.employee);
  }

  protected loadRelationshipsOptions(): void {
    this.userService
      .query()
      .pipe(map((res: HttpResponse<IUser[]>) => res.body ?? []))
      .pipe(map((users: IUser[]) => this.userService.addUserToCollectionIfMissing(users, this.editForm.get('employee')!.value)))
      .subscribe((users: IUser[]) => (this.usersSharedCollection = users));
  }

  protected createFromForm(): IFitnessAccount {
    return {
      ...new FitnessAccount(),
      id: this.editForm.get(['id'])!.value,
      fitnessAccountType: this.editForm.get(['fitnessAccountType'])!.value,
      url: this.editForm.get(['url'])!.value,
      nickname: this.editForm.get(['nickname'])!.value,
      isActive: this.editForm.get(['isActive'])!.value,
      createdDate: this.editForm.get(['createdDate'])!.value
        ? dayjs(this.editForm.get(['createdDate'])!.value, DATE_TIME_FORMAT)
        : undefined,
      employee: this.editForm.get(['employee'])!.value,
    };
  }
}
