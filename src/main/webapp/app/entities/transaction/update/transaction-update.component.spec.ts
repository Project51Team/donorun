import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { TransactionService } from '../service/transaction.service';
import { ITransaction, Transaction } from '../transaction.model';
import { IActivity } from 'app/entities/activity/activity.model';
import { ActivityService } from 'app/entities/activity/service/activity.service';
import { ITransactionGroup } from 'app/entities/transaction-group/transaction-group.model';
import { TransactionGroupService } from 'app/entities/transaction-group/service/transaction-group.service';

import { TransactionUpdateComponent } from './transaction-update.component';

describe('Transaction Management Update Component', () => {
  let comp: TransactionUpdateComponent;
  let fixture: ComponentFixture<TransactionUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let transactionService: TransactionService;
  let activityService: ActivityService;
  let transactionGroupService: TransactionGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [TransactionUpdateComponent],
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
      .overrideTemplate(TransactionUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(TransactionUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    transactionService = TestBed.inject(TransactionService);
    activityService = TestBed.inject(ActivityService);
    transactionGroupService = TestBed.inject(TransactionGroupService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call activity query and add missing value', () => {
      const transaction: ITransaction = { id: 'CBA' };
      const activity: IActivity = { id: 'd7c33962-d3f2-4b1b-a2e1-3ba8eeefeefa' };
      transaction.activity = activity;

      const activityCollection: IActivity[] = [{ id: '72e55995-6e9f-4e0d-a3ec-31cc970b033b' }];
      jest.spyOn(activityService, 'query').mockReturnValue(of(new HttpResponse({ body: activityCollection })));
      const expectedCollection: IActivity[] = [activity, ...activityCollection];
      jest.spyOn(activityService, 'addActivityToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ transaction });
      comp.ngOnInit();

      expect(activityService.query).toHaveBeenCalled();
      expect(activityService.addActivityToCollectionIfMissing).toHaveBeenCalledWith(activityCollection, activity);
      expect(comp.activitiesCollection).toEqual(expectedCollection);
    });

    it('Should call TransactionGroup query and add missing value', () => {
      const transaction: ITransaction = { id: 'CBA' };
      const transactionGroup: ITransactionGroup = { id: 'd4ab86ce-a441-4158-bd27-804b7126ed74' };
      transaction.transactionGroup = transactionGroup;

      const transactionGroupCollection: ITransactionGroup[] = [{ id: '4d61fc0d-4515-449c-9036-cfa8e3505f95' }];
      jest.spyOn(transactionGroupService, 'query').mockReturnValue(of(new HttpResponse({ body: transactionGroupCollection })));
      const additionalTransactionGroups = [transactionGroup];
      const expectedCollection: ITransactionGroup[] = [...additionalTransactionGroups, ...transactionGroupCollection];
      jest.spyOn(transactionGroupService, 'addTransactionGroupToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ transaction });
      comp.ngOnInit();

      expect(transactionGroupService.query).toHaveBeenCalled();
      expect(transactionGroupService.addTransactionGroupToCollectionIfMissing).toHaveBeenCalledWith(
        transactionGroupCollection,
        ...additionalTransactionGroups
      );
      expect(comp.transactionGroupsSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const transaction: ITransaction = { id: 'CBA' };
      const activity: IActivity = { id: '31f1aa84-52c8-4c48-8452-7889c6920795' };
      transaction.activity = activity;
      const transactionGroup: ITransactionGroup = { id: 'e8b36881-e1d1-4245-8de7-69e70e2ec14a' };
      transaction.transactionGroup = transactionGroup;

      activatedRoute.data = of({ transaction });
      comp.ngOnInit();

      expect(comp.editForm.value).toEqual(expect.objectContaining(transaction));
      expect(comp.activitiesCollection).toContain(activity);
      expect(comp.transactionGroupsSharedCollection).toContain(transactionGroup);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Transaction>>();
      const transaction = { id: 'ABC' };
      jest.spyOn(transactionService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ transaction });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: transaction }));
      saveSubject.complete();

      // THEN
      expect(comp.previousState).toHaveBeenCalled();
      expect(transactionService.update).toHaveBeenCalledWith(transaction);
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Transaction>>();
      const transaction = new Transaction();
      jest.spyOn(transactionService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ transaction });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: transaction }));
      saveSubject.complete();

      // THEN
      expect(transactionService.create).toHaveBeenCalledWith(transaction);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Transaction>>();
      const transaction = { id: 'ABC' };
      jest.spyOn(transactionService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ transaction });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(transactionService.update).toHaveBeenCalledWith(transaction);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Tracking relationships identifiers', () => {
    describe('trackActivityById', () => {
      it('Should return tracked Activity primary key', () => {
        const entity = { id: 'ABC' };
        const trackResult = comp.trackActivityById(0, entity);
        expect(trackResult).toEqual(entity.id);
      });
    });

    describe('trackTransactionGroupById', () => {
      it('Should return tracked TransactionGroup primary key', () => {
        const entity = { id: 'ABC' };
        const trackResult = comp.trackTransactionGroupById(0, entity);
        expect(trackResult).toEqual(entity.id);
      });
    });
  });
});
