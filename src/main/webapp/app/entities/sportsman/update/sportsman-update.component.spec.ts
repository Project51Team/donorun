import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { SportsmanService } from '../service/sportsman.service';
import { ISportsman, Sportsman } from '../sportsman.model';

import { IUser } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/user.service';
import { ICompany } from 'app/entities/company/company.model';
import { CompanyService } from 'app/entities/company/service/company.service';

import { SportsmanUpdateComponent } from './sportsman-update.component';

describe('Sportsman Management Update Component', () => {
  let comp: SportsmanUpdateComponent;
  let fixture: ComponentFixture<SportsmanUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let sportsmanService: SportsmanService;
  let userService: UserService;
  let companyService: CompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [SportsmanUpdateComponent],
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
      .overrideTemplate(SportsmanUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(SportsmanUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    sportsmanService = TestBed.inject(SportsmanService);
    userService = TestBed.inject(UserService);
    companyService = TestBed.inject(CompanyService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call User query and add missing value', () => {
      const sportsman: ISportsman = { id: 'CBA' };
      const user: IUser = { id: '55650ab9-da64-4735-be98-3b55f7a21fbc' };
      sportsman.user = user;

      const userCollection: IUser[] = [{ id: '895d9670-c3c7-4011-bcf2-a4ddd79ccfc3' }];
      jest.spyOn(userService, 'query').mockReturnValue(of(new HttpResponse({ body: userCollection })));
      const additionalUsers = [user];
      const expectedCollection: IUser[] = [...additionalUsers, ...userCollection];
      jest.spyOn(userService, 'addUserToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ sportsman });
      comp.ngOnInit();

      expect(userService.query).toHaveBeenCalled();
      expect(userService.addUserToCollectionIfMissing).toHaveBeenCalledWith(userCollection, ...additionalUsers);
      expect(comp.usersSharedCollection).toEqual(expectedCollection);
    });

    it('Should call Company query and add missing value', () => {
      const sportsman: ISportsman = { id: 'CBA' };
      const company: ICompany = { id: '7e179df8-4b56-49cd-bec0-fb1b72552bee' };
      sportsman.company = company;

      const companyCollection: ICompany[] = [{ id: 'ddf26c08-38c6-497f-9f82-bd94d8bb4769' }];
      jest.spyOn(companyService, 'query').mockReturnValue(of(new HttpResponse({ body: companyCollection })));
      const additionalCompanies = [company];
      const expectedCollection: ICompany[] = [...additionalCompanies, ...companyCollection];
      jest.spyOn(companyService, 'addCompanyToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ sportsman });
      comp.ngOnInit();

      expect(companyService.query).toHaveBeenCalled();
      expect(companyService.addCompanyToCollectionIfMissing).toHaveBeenCalledWith(companyCollection, ...additionalCompanies);
      expect(comp.companiesSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const sportsman: ISportsman = { id: 'CBA' };
      const user: IUser = { id: '8b4cda21-d5c8-450f-be6d-0a3444aeb28f' };
      sportsman.user = user;
      const company: ICompany = { id: '5f4c6811-4df4-43df-883d-e9b81d736d9d' };
      sportsman.company = company;

      activatedRoute.data = of({ sportsman });
      comp.ngOnInit();

      expect(comp.editForm.value).toEqual(expect.objectContaining(sportsman));
      expect(comp.usersSharedCollection).toContain(user);
      expect(comp.companiesSharedCollection).toContain(company);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Sportsman>>();
      const sportsman = { id: 'ABC' };
      jest.spyOn(sportsmanService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ sportsman });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: sportsman }));
      saveSubject.complete();

      // THEN
      expect(comp.previousState).toHaveBeenCalled();
      expect(sportsmanService.update).toHaveBeenCalledWith(sportsman);
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Sportsman>>();
      const sportsman = new Sportsman();
      jest.spyOn(sportsmanService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ sportsman });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: sportsman }));
      saveSubject.complete();

      // THEN
      expect(sportsmanService.create).toHaveBeenCalledWith(sportsman);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Sportsman>>();
      const sportsman = { id: 'ABC' };
      jest.spyOn(sportsmanService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ sportsman });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(sportsmanService.update).toHaveBeenCalledWith(sportsman);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Tracking relationships identifiers', () => {
    describe('trackUserById', () => {
      it('Should return tracked User primary key', () => {
        const entity = { id: 'ABC' };
        const trackResult = comp.trackUserById(0, entity);
        expect(trackResult).toEqual(entity.id);
      });
    });

    describe('trackCompanyById', () => {
      it('Should return tracked Company primary key', () => {
        const entity = { id: 'ABC' };
        const trackResult = comp.trackCompanyById(0, entity);
        expect(trackResult).toEqual(entity.id);
      });
    });
  });
});
