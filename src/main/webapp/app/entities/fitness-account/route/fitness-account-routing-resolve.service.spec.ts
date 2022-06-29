import { TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRouteSnapshot, ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { IFitnessAccount, FitnessAccount } from '../fitness-account.model';
import { FitnessAccountService } from '../service/fitness-account.service';

import { FitnessAccountRoutingResolveService } from './fitness-account-routing-resolve.service';

describe('FitnessAccount routing resolve service', () => {
  let mockRouter: Router;
  let mockActivatedRouteSnapshot: ActivatedRouteSnapshot;
  let routingResolveService: FitnessAccountRoutingResolveService;
  let service: FitnessAccountService;
  let resultFitnessAccount: IFitnessAccount | undefined;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({}),
            },
          },
        },
      ],
    });
    mockRouter = TestBed.inject(Router);
    jest.spyOn(mockRouter, 'navigate').mockImplementation(() => Promise.resolve(true));
    mockActivatedRouteSnapshot = TestBed.inject(ActivatedRoute).snapshot;
    routingResolveService = TestBed.inject(FitnessAccountRoutingResolveService);
    service = TestBed.inject(FitnessAccountService);
    resultFitnessAccount = undefined;
  });

  describe('resolve', () => {
    it('should return IFitnessAccount returned by find', () => {
      // GIVEN
      service.find = jest.fn(id => of(new HttpResponse({ body: { id } })));
      mockActivatedRouteSnapshot.params = { id: 123 };

      // WHEN
      routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
        resultFitnessAccount = result;
      });

      // THEN
      expect(service.find).toBeCalledWith(123);
      expect(resultFitnessAccount).toEqual({ id: 123 });
    });

    it('should return new IFitnessAccount if id is not provided', () => {
      // GIVEN
      service.find = jest.fn();
      mockActivatedRouteSnapshot.params = {};

      // WHEN
      routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
        resultFitnessAccount = result;
      });

      // THEN
      expect(service.find).not.toBeCalled();
      expect(resultFitnessAccount).toEqual(new FitnessAccount());
    });

    it('should route to 404 page if data not found in server', () => {
      // GIVEN
      jest.spyOn(service, 'find').mockReturnValue(of(new HttpResponse({ body: null as unknown as FitnessAccount })));
      mockActivatedRouteSnapshot.params = { id: 123 };

      // WHEN
      routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
        resultFitnessAccount = result;
      });

      // THEN
      expect(service.find).toBeCalledWith(123);
      expect(resultFitnessAccount).toEqual(undefined);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['404']);
    });
  });
});
