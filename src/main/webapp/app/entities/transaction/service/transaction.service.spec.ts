import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import dayjs from 'dayjs/esm';

import { DATE_TIME_FORMAT } from 'app/config/input.constants';
import { ITransaction, Transaction } from '../transaction.model';

import { TransactionService } from './transaction.service';

describe('Transaction Service', () => {
  let service: TransactionService;
  let httpMock: HttpTestingController;
  let elemDefault: ITransaction;
  let expectedResult: ITransaction | ITransaction[] | boolean | null;
  let currentDate: dayjs.Dayjs;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(TransactionService);
    httpMock = TestBed.inject(HttpTestingController);
    currentDate = dayjs();

    elemDefault = {
      id: 'AAAAAAA',
      sumOfMoney: 0,
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

    it('should create a Transaction', () => {
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

      service.create(new Transaction()).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a Transaction', () => {
      const returnedFromService = Object.assign(
        {
          id: 'BBBBBB',
          sumOfMoney: 1,
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

    it('should partial update a Transaction', () => {
      const patchObject = Object.assign(
        {
          sumOfMoney: 1,
          wasPaid: true,
          dateOfPayment: currentDate.format(DATE_TIME_FORMAT),
          createdDate: currentDate.format(DATE_TIME_FORMAT),
        },
        new Transaction()
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

    it('should return a list of Transaction', () => {
      const returnedFromService = Object.assign(
        {
          id: 'BBBBBB',
          sumOfMoney: 1,
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

    it('should delete a Transaction', () => {
      service.delete('ABC').subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult);
    });

    describe('addTransactionToCollectionIfMissing', () => {
      it('should add a Transaction to an empty array', () => {
        const transaction: ITransaction = { id: 'ABC' };
        expectedResult = service.addTransactionToCollectionIfMissing([], transaction);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(transaction);
      });

      it('should not add a Transaction to an array that contains it', () => {
        const transaction: ITransaction = { id: 'ABC' };
        const transactionCollection: ITransaction[] = [
          {
            ...transaction,
          },
          { id: 'CBA' },
        ];
        expectedResult = service.addTransactionToCollectionIfMissing(transactionCollection, transaction);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a Transaction to an array that doesn't contain it", () => {
        const transaction: ITransaction = { id: 'ABC' };
        const transactionCollection: ITransaction[] = [{ id: 'CBA' }];
        expectedResult = service.addTransactionToCollectionIfMissing(transactionCollection, transaction);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(transaction);
      });

      it('should add only unique Transaction to an array', () => {
        const transactionArray: ITransaction[] = [{ id: 'ABC' }, { id: 'CBA' }, { id: 'fca4b158-fb22-4814-9d40-ded027e3db1e' }];
        const transactionCollection: ITransaction[] = [{ id: 'ABC' }];
        expectedResult = service.addTransactionToCollectionIfMissing(transactionCollection, ...transactionArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const transaction: ITransaction = { id: 'ABC' };
        const transaction2: ITransaction = { id: 'CBA' };
        expectedResult = service.addTransactionToCollectionIfMissing([], transaction, transaction2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(transaction);
        expect(expectedResult).toContain(transaction2);
      });

      it('should accept null and undefined values', () => {
        const transaction: ITransaction = { id: 'ABC' };
        expectedResult = service.addTransactionToCollectionIfMissing([], null, transaction, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(transaction);
      });

      it('should return initial array if no Transaction is added', () => {
        const transactionCollection: ITransaction[] = [{ id: 'ABC' }];
        expectedResult = service.addTransactionToCollectionIfMissing(transactionCollection, undefined, null);
        expect(expectedResult).toEqual(transactionCollection);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
