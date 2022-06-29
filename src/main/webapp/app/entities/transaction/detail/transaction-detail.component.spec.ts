import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TransactionDetailComponent } from './transaction-detail.component';

describe('Transaction Management Detail Component', () => {
  let comp: TransactionDetailComponent;
  let fixture: ComponentFixture<TransactionDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ transaction: { id: 123 } }) },
        },
      ],
    })
      .overrideTemplate(TransactionDetailComponent, '')
      .compileComponents();
    fixture = TestBed.createComponent(TransactionDetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load transaction on init', () => {
      // WHEN
      comp.ngOnInit();

      // THEN
      expect(comp.transaction).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});
