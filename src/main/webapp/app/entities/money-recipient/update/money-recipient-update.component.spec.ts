import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { MoneyRecipientService } from '../service/money-recipient.service';
import { IMoneyRecipient, MoneyRecipient } from '../money-recipient.model';

import { MoneyRecipientUpdateComponent } from './money-recipient-update.component';

describe('MoneyRecipient Management Update Component', () => {
  let comp: MoneyRecipientUpdateComponent;
  let fixture: ComponentFixture<MoneyRecipientUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let moneyRecipientService: MoneyRecipientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [MoneyRecipientUpdateComponent],
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
      .overrideTemplate(MoneyRecipientUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(MoneyRecipientUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    moneyRecipientService = TestBed.inject(MoneyRecipientService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const moneyRecipient: IMoneyRecipient = { id: 456 };

      activatedRoute.data = of({ moneyRecipient });
      comp.ngOnInit();

      expect(comp.editForm.value).toEqual(expect.objectContaining(moneyRecipient));
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<MoneyRecipient>>();
      const moneyRecipient = { id: 123 };
      jest.spyOn(moneyRecipientService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ moneyRecipient });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: moneyRecipient }));
      saveSubject.complete();

      // THEN
      expect(comp.previousState).toHaveBeenCalled();
      expect(moneyRecipientService.update).toHaveBeenCalledWith(moneyRecipient);
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<MoneyRecipient>>();
      const moneyRecipient = new MoneyRecipient();
      jest.spyOn(moneyRecipientService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ moneyRecipient });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: moneyRecipient }));
      saveSubject.complete();

      // THEN
      expect(moneyRecipientService.create).toHaveBeenCalledWith(moneyRecipient);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<MoneyRecipient>>();
      const moneyRecipient = { id: 123 };
      jest.spyOn(moneyRecipientService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ moneyRecipient });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(moneyRecipientService.update).toHaveBeenCalledWith(moneyRecipient);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
