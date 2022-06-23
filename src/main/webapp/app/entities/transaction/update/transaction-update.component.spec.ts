import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { TransactionService } from '../service/transaction.service';
import { ITransaction, Transaction } from '../transaction.model';
import { IMoneyRecipient } from 'app/entities/money-recipient/money-recipient.model';
import { MoneyRecipientService } from 'app/entities/money-recipient/service/money-recipient.service';
import { IActivity } from 'app/entities/activity/activity.model';
import { ActivityService } from 'app/entities/activity/service/activity.service';

import { TransactionUpdateComponent } from './transaction-update.component';

describe('Transaction Management Update Component', () => {
  let comp: TransactionUpdateComponent;
  let fixture: ComponentFixture<TransactionUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let transactionService: TransactionService;
  let moneyRecipientService: MoneyRecipientService;
  let activityService: ActivityService;

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
    moneyRecipientService = TestBed.inject(MoneyRecipientService);
    activityService = TestBed.inject(ActivityService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call MoneyRecipient query and add missing value', () => {
      const transaction: ITransaction = { id: 'CBA' };
      const recipient: IMoneyRecipient = { id: '83dd95dc-1fce-42a3-afc7-15baca9804fd' };
      transaction.recipient = recipient;

      const moneyRecipientCollection: IMoneyRecipient[] = [{ id: '1dab076c-c40a-4179-8fb7-5c73d565656c' }];
      jest.spyOn(moneyRecipientService, 'query').mockReturnValue(of(new HttpResponse({ body: moneyRecipientCollection })));
      const additionalMoneyRecipients = [recipient];
      const expectedCollection: IMoneyRecipient[] = [...additionalMoneyRecipients, ...moneyRecipientCollection];
      jest.spyOn(moneyRecipientService, 'addMoneyRecipientToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ transaction });
      comp.ngOnInit();

      expect(moneyRecipientService.query).toHaveBeenCalled();
      expect(moneyRecipientService.addMoneyRecipientToCollectionIfMissing).toHaveBeenCalledWith(
        moneyRecipientCollection,
        ...additionalMoneyRecipients
      );
      expect(comp.moneyRecipientsSharedCollection).toEqual(expectedCollection);
    });

    it('Should call Activity query and add missing value', () => {
      const transaction: ITransaction = { id: 'CBA' };
      const activities: IActivity[] = [{ id: 'd7c33962-d3f2-4b1b-a2e1-3ba8eeefeefa' }];
      transaction.activities = activities;

      const activityCollection: IActivity[] = [{ id: '72e55995-6e9f-4e0d-a3ec-31cc970b033b' }];
      jest.spyOn(activityService, 'query').mockReturnValue(of(new HttpResponse({ body: activityCollection })));
      const additionalActivities = [...activities];
      const expectedCollection: IActivity[] = [...additionalActivities, ...activityCollection];
      jest.spyOn(activityService, 'addActivityToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ transaction });
      comp.ngOnInit();

      expect(activityService.query).toHaveBeenCalled();
      expect(activityService.addActivityToCollectionIfMissing).toHaveBeenCalledWith(activityCollection, ...additionalActivities);
      expect(comp.activitiesSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const transaction: ITransaction = { id: 'CBA' };
      const recipient: IMoneyRecipient = { id: '503a843d-8569-4cd3-866c-d614456c5833' };
      transaction.recipient = recipient;
      const activities: IActivity = { id: '31f1aa84-52c8-4c48-8452-7889c6920795' };
      transaction.activities = [activities];

      activatedRoute.data = of({ transaction });
      comp.ngOnInit();

      expect(comp.editForm.value).toEqual(expect.objectContaining(transaction));
      expect(comp.moneyRecipientsSharedCollection).toContain(recipient);
      expect(comp.activitiesSharedCollection).toContain(activities);
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
    describe('trackMoneyRecipientById', () => {
      it('Should return tracked MoneyRecipient primary key', () => {
        const entity = { id: 'ABC' };
        const trackResult = comp.trackMoneyRecipientById(0, entity);
        expect(trackResult).toEqual(entity.id);
      });
    });

    describe('trackActivityById', () => {
      it('Should return tracked Activity primary key', () => {
        const entity = { id: 'ABC' };
        const trackResult = comp.trackActivityById(0, entity);
        expect(trackResult).toEqual(entity.id);
      });
    });
  });

  describe('Getting selected relationships', () => {
    describe('getSelectedActivity', () => {
      it('Should return option if no Activity is selected', () => {
        const option = { id: 'ABC' };
        const result = comp.getSelectedActivity(option);
        expect(result === option).toEqual(true);
      });

      it('Should return selected Activity for according option', () => {
        const option = { id: 'ABC' };
        const selected = { id: 'ABC' };
        const selected2 = { id: 'CBA' };
        const result = comp.getSelectedActivity(option, [selected2, selected]);
        expect(result === selected).toEqual(true);
        expect(result === selected2).toEqual(false);
        expect(result === option).toEqual(false);
      });

      it('Should return option if this Activity is not selected', () => {
        const option = { id: 'ABC' };
        const selected = { id: 'CBA' };
        const result = comp.getSelectedActivity(option, [selected]);
        expect(result === option).toEqual(true);
        expect(result === selected).toEqual(false);
      });
    });
  });
});
