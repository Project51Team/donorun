import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import dayjs from 'dayjs/esm';

import { DATE_TIME_FORMAT } from 'app/config/input.constants';
import { FitnessAccountType } from 'app/entities/enumerations/fitness-account-type.model';
import { IFitnessAccount, FitnessAccount } from '../fitness-account.model';

import { FitnessAccountService } from './fitness-account.service';

describe('FitnessAccount Service', () => {
  let service: FitnessAccountService;
  let httpMock: HttpTestingController;
  let elemDefault: IFitnessAccount;
  let expectedResult: IFitnessAccount | IFitnessAccount[] | boolean | null;
  let currentDate: dayjs.Dayjs;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(FitnessAccountService);
    httpMock = TestBed.inject(HttpTestingController);
    currentDate = dayjs();

    elemDefault = {
      id: 0,
      fitnessAccountType: FitnessAccountType.STRAVA,
      url: 'AAAAAAA',
      nickname: 'AAAAAAA',
      isActive: false,
      createdDate: currentDate,
    };
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = Object.assign(
        {
          createdDate: currentDate.format(DATE_TIME_FORMAT),
        },
        elemDefault
      );

      service.find(123).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(elemDefault);
    });

    it('should create a FitnessAccount', () => {
      const returnedFromService = Object.assign(
        {
          id: 0,
          createdDate: currentDate.format(DATE_TIME_FORMAT),
        },
        elemDefault
      );

      const expected = Object.assign(
        {
          createdDate: currentDate,
        },
        returnedFromService
      );

      service.create(new FitnessAccount()).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a FitnessAccount', () => {
      const returnedFromService = Object.assign(
        {
          id: 1,
          fitnessAccountType: 'BBBBBB',
          url: 'BBBBBB',
          nickname: 'BBBBBB',
          isActive: true,
          createdDate: currentDate.format(DATE_TIME_FORMAT),
        },
        elemDefault
      );

      const expected = Object.assign(
        {
          createdDate: currentDate,
        },
        returnedFromService
      );

      service.update(expected).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a FitnessAccount', () => {
      const patchObject = Object.assign(
        {
          url: 'BBBBBB',
          createdDate: currentDate.format(DATE_TIME_FORMAT),
        },
        new FitnessAccount()
      );

      const returnedFromService = Object.assign(patchObject, elemDefault);

      const expected = Object.assign(
        {
          createdDate: currentDate,
        },
        returnedFromService
      );

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of FitnessAccount', () => {
      const returnedFromService = Object.assign(
        {
          id: 1,
          fitnessAccountType: 'BBBBBB',
          url: 'BBBBBB',
          nickname: 'BBBBBB',
          isActive: true,
          createdDate: currentDate.format(DATE_TIME_FORMAT),
        },
        elemDefault
      );

      const expected = Object.assign(
        {
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

    it('should delete a FitnessAccount', () => {
      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult);
    });

    describe('addFitnessAccountToCollectionIfMissing', () => {
      it('should add a FitnessAccount to an empty array', () => {
        const fitnessAccount: IFitnessAccount = { id: 123 };
        expectedResult = service.addFitnessAccountToCollectionIfMissing([], fitnessAccount);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(fitnessAccount);
      });

      it('should not add a FitnessAccount to an array that contains it', () => {
        const fitnessAccount: IFitnessAccount = { id: 123 };
        const fitnessAccountCollection: IFitnessAccount[] = [
          {
            ...fitnessAccount,
          },
          { id: 456 },
        ];
        expectedResult = service.addFitnessAccountToCollectionIfMissing(fitnessAccountCollection, fitnessAccount);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a FitnessAccount to an array that doesn't contain it", () => {
        const fitnessAccount: IFitnessAccount = { id: 123 };
        const fitnessAccountCollection: IFitnessAccount[] = [{ id: 456 }];
        expectedResult = service.addFitnessAccountToCollectionIfMissing(fitnessAccountCollection, fitnessAccount);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(fitnessAccount);
      });

      it('should add only unique FitnessAccount to an array', () => {
        const fitnessAccountArray: IFitnessAccount[] = [{ id: 123 }, { id: 456 }, { id: 14684 }];
        const fitnessAccountCollection: IFitnessAccount[] = [{ id: 123 }];
        expectedResult = service.addFitnessAccountToCollectionIfMissing(fitnessAccountCollection, ...fitnessAccountArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const fitnessAccount: IFitnessAccount = { id: 123 };
        const fitnessAccount2: IFitnessAccount = { id: 456 };
        expectedResult = service.addFitnessAccountToCollectionIfMissing([], fitnessAccount, fitnessAccount2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(fitnessAccount);
        expect(expectedResult).toContain(fitnessAccount2);
      });

      it('should accept null and undefined values', () => {
        const fitnessAccount: IFitnessAccount = { id: 123 };
        expectedResult = service.addFitnessAccountToCollectionIfMissing([], null, fitnessAccount, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(fitnessAccount);
      });

      it('should return initial array if no FitnessAccount is added', () => {
        const fitnessAccountCollection: IFitnessAccount[] = [{ id: 123 }];
        expectedResult = service.addFitnessAccountToCollectionIfMissing(fitnessAccountCollection, undefined, null);
        expect(expectedResult).toEqual(fitnessAccountCollection);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
