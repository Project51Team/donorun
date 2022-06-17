import { TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRouteSnapshot, ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ITransactionGroup, TransactionGroup } from '../transaction-group.model';
import { TransactionGroupService } from '../service/transaction-group.service';

import { TransactionGroupRoutingResolveService } from './transaction-group-routing-resolve.service';

describe('TransactionGroup routing resolve service', () => {
  let mockRouter: Router;
  let mockActivatedRouteSnapshot: ActivatedRouteSnapshot;
  let routingResolveService: TransactionGroupRoutingResolveService;
  let service: TransactionGroupService;
  let resultTransactionGroup: ITransactionGroup | undefined;

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
    routingResolveService = TestBed.inject(TransactionGroupRoutingResolveService);
    service = TestBed.inject(TransactionGroupService);
    resultTransactionGroup = undefined;
  });

  describe('resolve', () => {
    it('should return ITransactionGroup returned by find', () => {
      // GIVEN
      service.find = jest.fn(id => of(new HttpResponse({ body: { id } })));
      mockActivatedRouteSnapshot.params = { id: 'ABC' };

      // WHEN
      routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
        resultTransactionGroup = result;
      });

      // THEN
      expect(service.find).toBeCalledWith('ABC');
      expect(resultTransactionGroup).toEqual({ id: 'ABC' });
    });

    it('should return new ITransactionGroup if id is not provided', () => {
      // GIVEN
      service.find = jest.fn();
      mockActivatedRouteSnapshot.params = {};

      // WHEN
      routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
        resultTransactionGroup = result;
      });

      // THEN
      expect(service.find).not.toBeCalled();
      expect(resultTransactionGroup).toEqual(new TransactionGroup());
    });

    it('should route to 404 page if data not found in server', () => {
      // GIVEN
      jest.spyOn(service, 'find').mockReturnValue(of(new HttpResponse({ body: null as unknown as TransactionGroup })));
      mockActivatedRouteSnapshot.params = { id: 'ABC' };

      // WHEN
      routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
        resultTransactionGroup = result;
      });

      // THEN
      expect(service.find).toBeCalledWith('ABC');
      expect(resultTransactionGroup).toEqual(undefined);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['404']);
    });
  });
});
