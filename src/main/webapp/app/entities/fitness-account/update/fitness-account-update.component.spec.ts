import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { FitnessAccountService } from '../service/fitness-account.service';
import { IFitnessAccount, FitnessAccount } from '../fitness-account.model';

import { IUser } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/user.service';

import { FitnessAccountUpdateComponent } from './fitness-account-update.component';

describe('FitnessAccount Management Update Component', () => {
  let comp: FitnessAccountUpdateComponent;
  let fixture: ComponentFixture<FitnessAccountUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let fitnessAccountService: FitnessAccountService;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [FitnessAccountUpdateComponent],
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
      .overrideTemplate(FitnessAccountUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(FitnessAccountUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fitnessAccountService = TestBed.inject(FitnessAccountService);
    userService = TestBed.inject(UserService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call User query and add missing value', () => {
      const fitnessAccount: IFitnessAccount = { id: 456 };
      const employee: IUser = { id: 97289 };
      fitnessAccount.employee = employee;

      const userCollection: IUser[] = [{ id: 51991 }];
      jest.spyOn(userService, 'query').mockReturnValue(of(new HttpResponse({ body: userCollection })));
      const additionalUsers = [employee];
      const expectedCollection: IUser[] = [...additionalUsers, ...userCollection];
      jest.spyOn(userService, 'addUserToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ fitnessAccount });
      comp.ngOnInit();

      expect(userService.query).toHaveBeenCalled();
      expect(userService.addUserToCollectionIfMissing).toHaveBeenCalledWith(userCollection, ...additionalUsers);
      expect(comp.usersSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const fitnessAccount: IFitnessAccount = { id: 456 };
      const employee: IUser = { id: 92059 };
      fitnessAccount.employee = employee;

      activatedRoute.data = of({ fitnessAccount });
      comp.ngOnInit();

      expect(comp.editForm.value).toEqual(expect.objectContaining(fitnessAccount));
      expect(comp.usersSharedCollection).toContain(employee);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<FitnessAccount>>();
      const fitnessAccount = { id: 123 };
      jest.spyOn(fitnessAccountService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ fitnessAccount });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: fitnessAccount }));
      saveSubject.complete();

      // THEN
      expect(comp.previousState).toHaveBeenCalled();
      expect(fitnessAccountService.update).toHaveBeenCalledWith(fitnessAccount);
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<FitnessAccount>>();
      const fitnessAccount = new FitnessAccount();
      jest.spyOn(fitnessAccountService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ fitnessAccount });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: fitnessAccount }));
      saveSubject.complete();

      // THEN
      expect(fitnessAccountService.create).toHaveBeenCalledWith(fitnessAccount);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<FitnessAccount>>();
      const fitnessAccount = { id: 123 };
      jest.spyOn(fitnessAccountService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ fitnessAccount });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(fitnessAccountService.update).toHaveBeenCalledWith(fitnessAccount);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Tracking relationships identifiers', () => {
    describe('trackUserById', () => {
      it('Should return tracked User primary key', () => {
        const entity = { id: 123 };
        const trackResult = comp.trackUserById(0, entity);
        expect(trackResult).toEqual(entity.id);
      });
    });
  });
});
