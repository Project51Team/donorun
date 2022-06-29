import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { FitnessAccountService } from '../service/fitness-account.service';

import { FitnessAccountComponent } from './fitness-account.component';

describe('FitnessAccount Management Component', () => {
  let comp: FitnessAccountComponent;
  let fixture: ComponentFixture<FitnessAccountComponent>;
  let service: FitnessAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FitnessAccountComponent],
    })
      .overrideTemplate(FitnessAccountComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(FitnessAccountComponent);
    comp = fixture.componentInstance;
    service = TestBed.inject(FitnessAccountService);

    const headers = new HttpHeaders();
    jest.spyOn(service, 'query').mockReturnValue(
      of(
        new HttpResponse({
          body: [{ id: 123 }],
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
    expect(comp.fitnessAccounts?.[0]).toEqual(expect.objectContaining({ id: 123 }));
  });
});
