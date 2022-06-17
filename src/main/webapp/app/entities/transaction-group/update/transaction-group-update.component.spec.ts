import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { TransactionGroupService } from '../service/transaction-group.service';
import { ITransactionGroup, TransactionGroup } from '../transaction-group.model';
import { IMoneyRecipient } from 'app/entities/money-recipient/money-recipient.model';
import { MoneyRecipientService } from 'app/entities/money-recipient/service/money-recipient.service';

import { TransactionGroupUpdateComponent } from './transaction-group-update.component';

describe('TransactionGroup Management Update Component', () => {
  let comp: TransactionGroupUpdateComponent;
  let fixture: ComponentFixture<TransactionGroupUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let transactionGroupService: TransactionGroupService;
  let moneyRecipientService: MoneyRecipientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [TransactionGroupUpdateComponent],
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
      .overrideTemplate(TransactionGroupUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(TransactionGroupUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    transactionGroupService = TestBed.inject(TransactionGroupService);
    moneyRecipientService = TestBed.inject(MoneyRecipientService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call MoneyRecipient query and add missing value', () => {
      const transactionGroup: ITransactionGroup = { id: 'CBA' };
      const recipient: IMoneyRecipient = { id: 'd8491b40-e914-4a6e-b87e-d31cc2cc3535' };
      transactionGroup.recipient = recipient;

      const moneyRecipientCollection: IMoneyRecipient[] = [{ id: '51ce922a-062c-43bc-b9de-e7869d377693' }];
      jest.spyOn(moneyRecipientService, 'query').mockReturnValue(of(new HttpResponse({ body: moneyRecipientCollection })));
      const additionalMoneyRecipients = [recipient];
      const expectedCollection: IMoneyRecipient[] = [...additionalMoneyRecipients, ...moneyRecipientCollection];
      jest.spyOn(moneyRecipientService, 'addMoneyRecipientToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ transactionGroup });
      comp.ngOnInit();

      expect(moneyRecipientService.query).toHaveBeenCalled();
      expect(moneyRecipientService.addMoneyRecipientToCollectionIfMissing).toHaveBeenCalledWith(
        moneyRecipientCollection,
        ...additionalMoneyRecipients
      );
      expect(comp.moneyRecipientsSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const transactionGroup: ITransactionGroup = { id: 'CBA' };
      const recipient: IMoneyRecipient = { id: 'd989576e-4986-4a0d-84d7-d884bb3aa0c7' };
      transactionGroup.recipient = recipient;

      activatedRoute.data = of({ transactionGroup });
      comp.ngOnInit();

      expect(comp.editForm.value).toEqual(expect.objectContaining(transactionGroup));
      expect(comp.moneyRecipientsSharedCollection).toContain(recipient);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<TransactionGroup>>();
      const transactionGroup = { id: 'ABC' };
      jest.spyOn(transactionGroupService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ transactionGroup });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: transactionGroup }));
      saveSubject.complete();

      // THEN
      expect(comp.previousState).toHaveBeenCalled();
      expect(transactionGroupService.update).toHaveBeenCalledWith(transactionGroup);
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<TransactionGroup>>();
      const transactionGroup = new TransactionGroup();
      jest.spyOn(transactionGroupService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ transactionGroup });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: transactionGroup }));
      saveSubject.complete();

      // THEN
      expect(transactionGroupService.create).toHaveBeenCalledWith(transactionGroup);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<TransactionGroup>>();
      const transactionGroup = { id: 'ABC' };
      jest.spyOn(transactionGroupService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ transactionGroup });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(transactionGroupService.update).toHaveBeenCalledWith(transactionGroup);
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
  });
});
