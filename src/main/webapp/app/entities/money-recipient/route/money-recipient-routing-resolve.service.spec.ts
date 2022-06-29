import { TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRouteSnapshot, ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { IMoneyRecipient, MoneyRecipient } from '../money-recipient.model';
import { MoneyRecipientService } from '../service/money-recipient.service';

import { MoneyRecipientRoutingResolveService } from './money-recipient-routing-resolve.service';

describe('MoneyRecipient routing resolve service', () => {
  let mockRouter: Router;
  let mockActivatedRouteSnapshot: ActivatedRouteSnapshot;
  let routingResolveService: MoneyRecipientRoutingResolveService;
  let service: MoneyRecipientService;
  let resultMoneyRecipient: IMoneyRecipient | undefined;

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
    routingResolveService = TestBed.inject(MoneyRecipientRoutingResolveService);
    service = TestBed.inject(MoneyRecipientService);
    resultMoneyRecipient = undefined;
  });

  describe('resolve', () => {
    it('should return IMoneyRecipient returned by find', () => {
      // GIVEN
      service.find = jest.fn(id => of(new HttpResponse({ body: { id } })));
      mockActivatedRouteSnapshot.params = { id: 123 };

      // WHEN
      routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
        resultMoneyRecipient = result;
      });

      // THEN
      expect(service.find).toBeCalledWith(123);
      expect(resultMoneyRecipient).toEqual({ id: 123 });
    });

    it('should return new IMoneyRecipient if id is not provided', () => {
      // GIVEN
      service.find = jest.fn();
      mockActivatedRouteSnapshot.params = {};

      // WHEN
      routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
        resultMoneyRecipient = result;
      });

      // THEN
      expect(service.find).not.toBeCalled();
      expect(resultMoneyRecipient).toEqual(new MoneyRecipient());
    });

    it('should route to 404 page if data not found in server', () => {
      // GIVEN
      jest.spyOn(service, 'find').mockReturnValue(of(new HttpResponse({ body: null as unknown as MoneyRecipient })));
      mockActivatedRouteSnapshot.params = { id: 123 };

      // WHEN
      routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
        resultMoneyRecipient = result;
      });

      // THEN
      expect(service.find).toBeCalledWith(123);
      expect(resultMoneyRecipient).toEqual(undefined);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['404']);
    });
  });
});
