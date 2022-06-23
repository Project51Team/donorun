import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { ISetting, Setting } from '../setting.model';
import { SettingService } from '../service/setting.service';
import { ICompany } from 'app/entities/company/company.model';
import { CompanyService } from 'app/entities/company/service/company.service';
import { ValueType } from 'app/entities/enumerations/value-type.model';

@Component({
  selector: 'jhi-setting-update',
  templateUrl: './setting-update.component.html',
})
export class SettingUpdateComponent implements OnInit {
  isSaving = false;
  valueTypeValues = Object.keys(ValueType);

  companiesSharedCollection: ICompany[] = [];

  editForm = this.fb.group({
    id: [],
    code: [],
    description: [],
    type: [],
    value: [],
    company: [],
  });

  constructor(
    protected settingService: SettingService,
    protected companyService: CompanyService,
    protected activatedRoute: ActivatedRoute,
    protected fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ setting }) => {
      this.updateForm(setting);

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const setting = this.createFromForm();
    if (setting.id !== undefined) {
      this.subscribeToSaveResponse(this.settingService.update(setting));
    } else {
      this.subscribeToSaveResponse(this.settingService.create(setting));
    }
  }

  trackCompanyById(_index: number, item: ICompany): string {
    return item.id!;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISetting>>): void {
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

  protected updateForm(setting: ISetting): void {
    this.editForm.patchValue({
      id: setting.id,
      code: setting.code,
      description: setting.description,
      type: setting.type,
      value: setting.value,
      company: setting.company,
    });

    this.companiesSharedCollection = this.companyService.addCompanyToCollectionIfMissing(this.companiesSharedCollection, setting.company);
  }

  protected loadRelationshipsOptions(): void {
    this.companyService
      .query()
      .pipe(map((res: HttpResponse<ICompany[]>) => res.body ?? []))
      .pipe(
        map((companies: ICompany[]) => this.companyService.addCompanyToCollectionIfMissing(companies, this.editForm.get('company')!.value))
      )
      .subscribe((companies: ICompany[]) => (this.companiesSharedCollection = companies));
  }

  protected createFromForm(): ISetting {
    return {
      ...new Setting(),
      id: this.editForm.get(['id'])!.value,
      code: this.editForm.get(['code'])!.value,
      description: this.editForm.get(['description'])!.value,
      type: this.editForm.get(['type'])!.value,
      value: this.editForm.get(['value'])!.value,
      company: this.editForm.get(['company'])!.value,
    };
  }
}
