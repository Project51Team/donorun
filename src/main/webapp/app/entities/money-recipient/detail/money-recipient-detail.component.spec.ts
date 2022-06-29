import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { MoneyRecipientDetailComponent } from './money-recipient-detail.component';

describe('MoneyRecipient Management Detail Component', () => {
  let comp: MoneyRecipientDetailComponent;
  let fixture: ComponentFixture<MoneyRecipientDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyRecipientDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ moneyRecipient: { id: 123 } }) },
        },
      ],
    })
      .overrideTemplate(MoneyRecipientDetailComponent, '')
      .compileComponents();
    fixture = TestBed.createComponent(MoneyRecipientDetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load moneyRecipient on init', () => {
      // WHEN
      comp.ngOnInit();

      // THEN
      expect(comp.moneyRecipient).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});
