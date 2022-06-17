import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TransactionGroupDetailComponent } from './transaction-group-detail.component';

describe('TransactionGroup Management Detail Component', () => {
  let comp: TransactionGroupDetailComponent;
  let fixture: ComponentFixture<TransactionGroupDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionGroupDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ transactionGroup: { id: 'ABC' } }) },
        },
      ],
    })
      .overrideTemplate(TransactionGroupDetailComponent, '')
      .compileComponents();
    fixture = TestBed.createComponent(TransactionGroupDetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load transactionGroup on init', () => {
      // WHEN
      comp.ngOnInit();

      // THEN
      expect(comp.transactionGroup).toEqual(expect.objectContaining({ id: 'ABC' }));
    });
  });
});
