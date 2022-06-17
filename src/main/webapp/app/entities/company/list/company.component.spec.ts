import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { CompanyService } from '../service/company.service';

import { CompanyComponent } from './company.component';

describe('Company Management Component', () => {
  let comp: CompanyComponent;
  let fixture: ComponentFixture<CompanyComponent>;
  let service: CompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CompanyComponent],
    })
      .overrideTemplate(CompanyComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(CompanyComponent);
    comp = fixture.componentInstance;
    service = TestBed.inject(CompanyService);

    const headers = new HttpHeaders();
    jest.spyOn(service, 'query').mockReturnValue(
      of(
        new HttpResponse({
          body: [{ id: 'ABC' }],
          headers,
        })
      )
    );
  });

  it('Should call load all on init', () => {
    // WHEN
    comp.ngOnInit();

    // THEN
    expect(service.query).toHaveBeenCalled();
    expect(comp.companies?.[0]).toEqual(expect.objectContaining({ id: 'ABC' }));
  });
});
