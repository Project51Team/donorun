import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import dayjs from 'dayjs/esm';

import { DATE_TIME_FORMAT } from 'app/config/input.constants';
import { ITransactionGroup, TransactionGroup } from '../transaction-group.model';

import { TransactionGroupService } from './transaction-group.service';

describe('TransactionGroup Service', () => {
  let service: TransactionGroupService;
  let httpMock: HttpTestingController;
  let elemDefault: ITransactionGroup;
  let expectedResult: ITransactionGroup | ITransactionGroup[] | boolean | null;
  let currentDate: dayjs.Dayjs;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(TransactionGroupService);
    httpMock = TestBed.inject(HttpTestingController);
    currentDate = dayjs();

    elemDefault = {
      id: 'AAAAAAA',
      amountOfMoney: 0,
      message: 'AAAAAAA',
      wasPaid: false,
      dateOfPayment: currentDate,
      createdDate: currentDate,
    };
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = Object.assign(
        {
          dateOfPayment: currentDate.format(DATE_TIME_FORMAT),
          createdDate: currentDate.format(DATE_TIME_FORMAT),
        },
        elemDefault
      );

      service.find('ABC').subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(elemDefault);
    });

    it('should create a TransactionGroup', () => {
      const returnedFromService = Object.assign(
        {
          id: 'ID',
          dateOfPayment: currentDate.format(DATE_TIME_FORMAT),
          createdDate: currentDate.format(DATE_TIME_FORMAT),
        },
        elemDefault
      );

      const expected = Object.assign(
        {
          dateOfPayment: currentDate,
          createdDate: currentDate,
        },
        returnedFromService
      );

      service.create(new TransactionGroup()).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a TransactionGroup', () => {
      const returnedFromService = Object.assign(
        {
          id: 'BBBBBB',
          amountOfMoney: 1,
          message: 'BBBBBB',
          wasPaid: true,
          dateOfPayment: currentDate.format(DATE_TIME_FORMAT),
          createdDate: currentDate.format(DATE_TIME_FORMAT),
        },
        elemDefault
      );

      const expected = Object.assign(
        {
          dateOfPayment: currentDate,
          createdDate: currentDate,
        },
        returnedFromService
      );

      service.update(expected).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a TransactionGroup', () => {
      const patchObject = Object.assign(
        {
          amountOfMoney: 1,
          dateOfPayment: currentDate.format(DATE_TIME_FORMAT),
          createdDate: currentDate.format(DATE_TIME_FORMAT),
        },
        new TransactionGroup()
      );

      const returnedFromService = Object.assign(patchObject, elemDefault);

      const expected = Object.assign(
        {
          dateOfPayment: currentDate,
          createdDate: currentDate,
        },
        returnedFromService
      );

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of TransactionGroup', () => {
      const returnedFromService = Object.assign(
        {
          id: 'BBBBBB',
          amountOfMoney: 1,
          message: 'BBBBBB',
          wasPaid: true,
          dateOfPayment: currentDate.format(DATE_TIME_FORMAT),
          createdDate: currentDate.format(DATE_TIME_FORMAT),
        },
        elemDefault
      );

      const expected = Object.assign(
        {
          dateOfPayment: currentDate,
          createdDate: currentDate,
        },
        returnedFromService
      );

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toContainEqual(expected);
    });

    it('should delete a TransactionGroup', () => {
      service.delete('ABC').subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult);
    });

    describe('addTransactionGroupToCollectionIfMissing', () => {
      it('should add a TransactionGroup to an empty array', () => {
        const transactionGroup: ITransactionGroup = { id: 'ABC' };
        expectedResult = service.addTransactionGroupToCollectionIfMissing([], transactionGroup);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(transactionGroup);
      });

      it('should not add a TransactionGroup to an array that contains it', () => {
        const transactionGroup: ITransactionGroup = { id: 'ABC' };
        const transactionGroupCollection: ITransactionGroup[] = [
          {
            ...transactionGroup,
          },
          { id: 'CBA' },
        ];
        expectedResult = service.addTransactionGroupToCollectionIfMissing(transactionGroupCollection, transactionGroup);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a TransactionGroup to an array that doesn't contain it", () => {
        const transactionGroup: ITransactionGroup = { id: 'ABC' };
        const transactionGroupCollection: ITransactionGroup[] = [{ id: 'CBA' }];
        expectedResult = service.addTransactionGroupToCollectionIfMissing(transactionGroupCollection, transactionGroup);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(transactionGroup);
      });

      it('should add only unique TransactionGroup to an array', () => {
        const transactionGroupArray: ITransactionGroup[] = [{ id: 'ABC' }, { id: 'CBA' }, { id: '346ba323-4841-4fb4-bc53-78377f7b77bd' }];
        const transactionGroupCollection: ITransactionGroup[] = [{ id: 'ABC' }];
        expectedResult = service.addTransactionGroupToCollectionIfMissing(transactionGroupCollection, ...transactionGroupArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const transactionGroup: ITransactionGroup = { id: 'ABC' };
        const transactionGroup2: ITransactionGroup = { id: 'CBA' };
        expectedResult = service.addTransactionGroupToCollectionIfMissing([], transactionGroup, transactionGroup2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(transactionGroup);
        expect(expectedResult).toContain(transactionGroup2);
      });

      it('should accept null and undefined values', () => {
        const transactionGroup: ITransactionGroup = { id: 'ABC' };
        expectedResult = service.addTransactionGroupToCollectionIfMissing([], null, transactionGroup, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(transactionGroup);
      });

      it('should return initial array if no TransactionGroup is added', () => {
        const transactionGroupCollection: ITransactionGroup[] = [{ id: 'ABC' }];
        expectedResult = service.addTransactionGroupToCollectionIfMissing(transactionGroupCollection, undefined, null);
        expect(expectedResult).toEqual(transactionGroupCollection);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
