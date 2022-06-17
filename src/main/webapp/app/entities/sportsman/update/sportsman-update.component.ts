import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { ISportsman, Sportsman } from '../sportsman.model';
import { SportsmanService } from '../service/sportsman.service';
import { IUser } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/user.service';
import { ICompany } from 'app/entities/company/company.model';
import { CompanyService } from 'app/entities/company/service/company.service';

@Component({
  selector: 'jhi-sportsman-update',
  templateUrl: './sportsman-update.component.html',
})
export class SportsmanUpdateComponent implements OnInit {
  isSaving = false;

  usersSharedCollection: IUser[] = [];
  companiesSharedCollection: ICompany[] = [];

  editForm = this.fb.group({
    id: [],
    user: [],
    company: [],
  });

  constructor(
    protected sportsmanService: SportsmanService,
    protected userService: UserService,
    protected companyService: CompanyService,
    protected activatedRoute: ActivatedRoute,
    protected fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ sportsman }) => {
      this.updateForm(sportsman);

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const sportsman = this.createFromForm();
    if (sportsman.id !== undefined) {
      this.subscribeToSaveResponse(this.sportsmanService.update(sportsman));
    } else {
      this.subscribeToSaveResponse(this.sportsmanService.create(sportsman));
    }
  }

  trackUserById(_index: number, item: IUser): string {
    return item.id!;
  }

  trackCompanyById(_index: number, item: ICompany): string {
    return item.id!;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISportsman>>): void {
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

  protected updateForm(sportsman: ISportsman): void {
    this.editForm.patchValue({
      id: sportsman.id,
      user: sportsman.user,
      company: sportsman.company,
    });

    this.usersSharedCollection = this.userService.addUserToCollectionIfMissing(this.usersSharedCollection, sportsman.user);
    this.companiesSharedCollection = this.companyService.addCompanyToCollectionIfMissing(this.companiesSharedCollection, sportsman.company);
  }

  protected loadRelationshipsOptions(): void {
    this.userService
      .query()
      .pipe(map((res: HttpResponse<IUser[]>) => res.body ?? []))
      .pipe(map((users: IUser[]) => this.userService.addUserToCollectionIfMissing(users, this.editForm.get('user')!.value)))
      .subscribe((users: IUser[]) => (this.usersSharedCollection = users));

    this.companyService
      .query()
      .pipe(map((res: HttpResponse<ICompany[]>) => res.body ?? []))
      .pipe(
        map((companies: ICompany[]) => this.companyService.addCompanyToCollectionIfMissing(companies, this.editForm.get('company')!.value))
      )
      .subscribe((companies: ICompany[]) => (this.companiesSharedCollection = companies));
  }

  protected createFromForm(): ISportsman {
    return {
      ...new Sportsman(),
      id: this.editForm.get(['id'])!.value,
      user: this.editForm.get(['user'])!.value,
      company: this.editForm.get(['company'])!.value,
    };
  }
}
