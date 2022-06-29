import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { SettingService } from '../service/setting.service';
import { ISetting, Setting } from '../setting.model';
import { ICompany } from 'app/entities/company/company.model';
import { CompanyService } from 'app/entities/company/service/company.service';

import { SettingUpdateComponent } from './setting-update.component';

describe('Setting Management Update Component', () => {
  let comp: SettingUpdateComponent;
  let fixture: ComponentFixture<SettingUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let settingService: SettingService;
  let companyService: CompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [SettingUpdateComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(SettingUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(SettingUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    settingService = TestBed.inject(SettingService);
    companyService = TestBed.inject(CompanyService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call Company query and add missing value', () => {
      const setting: ISetting = { id: 456 };
      const company: ICompany = { id: 87455 };
      setting.company = company;

      const companyCollection: ICompany[] = [{ id: 2226 }];
      jest.spyOn(companyService, 'query').mockReturnValue(of(new HttpResponse({ body: companyCollection })));
      const additionalCompanies = [company];
      const expectedCollection: ICompany[] = [...additionalCompanies, ...companyCollection];
      jest.spyOn(companyService, 'addCompanyToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ setting });
      comp.ngOnInit();

      expect(companyService.query).toHaveBeenCalled();
      expect(companyService.addCompanyToCollectionIfMissing).toHaveBeenCalledWith(companyCollection, ...additionalCompanies);
      expect(comp.companiesSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const setting: ISetting = { id: 456 };
      const company: ICompany = { id: 57383 };
      setting.company = company;

      activatedRoute.data = of({ setting });
      comp.ngOnInit();

      expect(comp.editForm.value).toEqual(expect.objectContaining(setting));
      expect(comp.companiesSharedCollection).toContain(company);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Setting>>();
      const setting = { id: 123 };
      jest.spyOn(settingService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ setting });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: setting }));
      saveSubject.complete();

      // THEN
      expect(comp.previousState).toHaveBeenCalled();
      expect(settingService.update).toHaveBeenCalledWith(setting);
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Setting>>();
      const setting = new Setting();
      jest.spyOn(settingService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ setting });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: setting }));
      saveSubject.complete();

      // THEN
      expect(settingService.create).toHaveBeenCalledWith(setting);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Setting>>();
      const setting = { id: 123 };
      jest.spyOn(settingService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ setting });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(settingService.update).toHaveBeenCalledWith(setting);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Tracking relationships identifiers', () => {
    describe('trackCompanyById', () => {
      it('Should return tracked Company primary key', () => {
        const entity = { id: 123 };
        const trackResult = comp.trackCompanyById(0, entity);
        expect(trackResult).toEqual(entity.id);
      });
    });
  });
});
