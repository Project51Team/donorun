import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { FitnessAccountDetailComponent } from './fitness-account-detail.component';

describe('FitnessAccount Management Detail Component', () => {
  let comp: FitnessAccountDetailComponent;
  let fixture: ComponentFixture<FitnessAccountDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FitnessAccountDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ fitnessAccount: { id: 123 } }) },
        },
      ],
    })
      .overrideTemplate(FitnessAccountDetailComponent, '')
      .compileComponents();
    fixture = TestBed.createComponent(FitnessAccountDetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load fitnessAccount on init', () => {
      // WHEN
      comp.ngOnInit();

      // THEN
      expect(comp.fitnessAccount).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});
