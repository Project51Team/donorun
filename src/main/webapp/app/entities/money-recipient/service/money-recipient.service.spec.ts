import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RecipientType } from 'app/entities/enumerations/recipient-type.model';
import { IMoneyRecipient, MoneyRecipient } from '../money-recipient.model';

import { MoneyRecipientService } from './money-recipient.service';

describe('MoneyRecipient Service', () => {
  let service: MoneyRecipientService;
  let httpMock: HttpTestingController;
  let elemDefault: IMoneyRecipient;
  let expectedResult: IMoneyRecipient | IMoneyRecipient[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(MoneyRecipientService);
    httpMock = TestBed.inject(HttpTestingController);

    elemDefault = {
      id: 'AAAAAAA',
      name: 'AAAAAAA',
      description: 'AAAAAAA',
      avatarUrl: 'AAAAAAA',
      siteUrl: 'AAAAAAA',
      recipientType: RecipientType.DONATE,
      accountDetails: 'AAAAAAA',
    };
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = Object.assign({}, elemDefault);

      service.find('ABC').subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(elemDefault);
    });

    it('should create a MoneyRecipient', () => {
      const returnedFromService = Object.assign(
        {
          id: 'ID',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.create(new MoneyRecipient()).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a MoneyRecipient', () => {
      const returnedFromService = Object.assign(
        {
          id: 'BBBBBB',
          name: 'BBBBBB',
          description: 'BBBBBB',
          avatarUrl: 'BBBBBB',
          siteUrl: 'BBBBBB',
          recipientType: 'BBBBBB',
          accountDetails: 'BBBBBB',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.update(expected).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a MoneyRecipient', () => {
      const patchObject = Object.assign(
        {
          avatarUrl: 'BBBBBB',
          recipientType: 'BBBBBB',
          accountDetails: 'BBBBBB',
        },
        new MoneyRecipient()
      );

      const returnedFromService = Object.assign(patchObject, elemDefault);

      const expected = Object.assign({}, returnedFromService);

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of MoneyRecipient', () => {
      const returnedFromService = Object.assign(
        {
          id: 'BBBBBB',
          name: 'BBBBBB',
          description: 'BBBBBB',
          avatarUrl: 'BBBBBB',
          siteUrl: 'BBBBBB',
          recipientType: 'BBBBBB',
          accountDetails: 'BBBBBB',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toContainEqual(expected);
    });

    it('should delete a MoneyRecipient', () => {
      service.delete('ABC').subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult);
    });

    describe('addMoneyRecipientToCollectionIfMissing', () => {
      it('should add a MoneyRecipient to an empty array', () => {
        const moneyRecipient: IMoneyRecipient = { id: 'ABC' };
        expectedResult = service.addMoneyRecipientToCollectionIfMissing([], moneyRecipient);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(moneyRecipient);
      });

      it('should not add a MoneyRecipient to an array that contains it', () => {
        const moneyRecipient: IMoneyRecipient = { id: 'ABC' };
        const moneyRecipientCollection: IMoneyRecipient[] = [
          {
            ...moneyRecipient,
          },
          { id: 'CBA' },
        ];
        expectedResult = service.addMoneyRecipientToCollectionIfMissing(moneyRecipientCollection, moneyRecipient);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a MoneyRecipient to an array that doesn't contain it", () => {
        const moneyRecipient: IMoneyRecipient = { id: 'ABC' };
        const moneyRecipientCollection: IMoneyRecipient[] = [{ id: 'CBA' }];
        expectedResult = service.addMoneyRecipientToCollectionIfMissing(moneyRecipientCollection, moneyRecipient);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(moneyRecipient);
      });

      it('should add only unique MoneyRecipient to an array', () => {
        const moneyRecipientArray: IMoneyRecipient[] = [{ id: 'ABC' }, { id: 'CBA' }, { id: '714da624-5b87-4544-a716-7bfb57004414' }];
        const moneyRecipientCollection: IMoneyRecipient[] = [{ id: 'ABC' }];
        expectedResult = service.addMoneyRecipientToCollectionIfMissing(moneyRecipientCollection, ...moneyRecipientArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const moneyRecipient: IMoneyRecipient = { id: 'ABC' };
        const moneyRecipient2: IMoneyRecipient = { id: 'CBA' };
        expectedResult = service.addMoneyRecipientToCollectionIfMissing([], moneyRecipient, moneyRecipient2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(moneyRecipient);
        expect(expectedResult).toContain(moneyRecipient2);
      });

      it('should accept null and undefined values', () => {
        const moneyRecipient: IMoneyRecipient = { id: 'ABC' };
        expectedResult = service.addMoneyRecipientToCollectionIfMissing([], null, moneyRecipient, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(moneyRecipient);
      });

      it('should return initial array if no MoneyRecipient is added', () => {
        const moneyRecipientCollection: IMoneyRecipient[] = [{ id: 'ABC' }];
        expectedResult = service.addMoneyRecipientToCollectionIfMissing(moneyRecipientCollection, undefined, null);
        expect(expectedResult).toEqual(moneyRecipientCollection);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
