import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SportsmanDetailComponent } from './sportsman-detail.component';

describe('Sportsman Management Detail Component', () => {
  let comp: SportsmanDetailComponent;
  let fixture: ComponentFixture<SportsmanDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsmanDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ sportsman: { id: 'ABC' } }) },
        },
      ],
    })
      .overrideTemplate(SportsmanDetailComponent, '')
      .compileComponents();
    fixture = TestBed.createComponent(SportsmanDetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load sportsman on init', () => {
      // WHEN
      comp.ngOnInit();

      // THEN
      expect(comp.sportsman).toEqual(expect.objectContaining({ id: 'ABC' }));
    });
  });
});
