import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CompanyDetailComponent } from './company-detail.component';

describe('Company Management Detail Component', () => {
  let comp: CompanyDetailComponent;
  let fixture: ComponentFixture<CompanyDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ company: { id: 123 } }) },
        },
      ],
    })
      .overrideTemplate(CompanyDetailComponent, '')
      .compileComponents();
    fixture = TestBed.createComponent(CompanyDetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load company on init', () => {
      // WHEN
      comp.ngOnInit();

      // THEN
      expect(comp.company).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});
