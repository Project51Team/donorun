import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ISportsman, Sportsman } from '../sportsman.model';

import { SportsmanService } from './sportsman.service';

describe('Sportsman Service', () => {
  let service: SportsmanService;
  let httpMock: HttpTestingController;
  let elemDefault: ISportsman;
  let expectedResult: ISportsman | ISportsman[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(SportsmanService);
    httpMock = TestBed.inject(HttpTestingController);

    elemDefault = {
      id: 'AAAAAAA',
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

    it('should create a Sportsman', () => {
      const returnedFromService = Object.assign(
        {
          id: 'ID',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.create(new Sportsman()).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a Sportsman', () => {
      const returnedFromService = Object.assign(
        {
          id: 'BBBBBB',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.update(expected).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a Sportsman', () => {
      const patchObject = Object.assign({}, new Sportsman());

      const returnedFromService = Object.assign(patchObject, elemDefault);

      const expected = Object.assign({}, returnedFromService);

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of Sportsman', () => {
      const returnedFromService = Object.assign(
        {
          id: 'BBBBBB',
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

    it('should delete a Sportsman', () => {
      service.delete('ABC').subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult);
    });

    describe('addSportsmanToCollectionIfMissing', () => {
      it('should add a Sportsman to an empty array', () => {
        const sportsman: ISportsman = { id: 'ABC' };
        expectedResult = service.addSportsmanToCollectionIfMissing([], sportsman);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(sportsman);
      });

      it('should not add a Sportsman to an array that contains it', () => {
        const sportsman: ISportsman = { id: 'ABC' };
        const sportsmanCollection: ISportsman[] = [
          {
            ...sportsman,
          },
          { id: 'CBA' },
        ];
        expectedResult = service.addSportsmanToCollectionIfMissing(sportsmanCollection, sportsman);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a Sportsman to an array that doesn't contain it", () => {
        const sportsman: ISportsman = { id: 'ABC' };
        const sportsmanCollection: ISportsman[] = [{ id: 'CBA' }];
        expectedResult = service.addSportsmanToCollectionIfMissing(sportsmanCollection, sportsman);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(sportsman);
      });

      it('should add only unique Sportsman to an array', () => {
        const sportsmanArray: ISportsman[] = [{ id: 'ABC' }, { id: 'CBA' }, { id: 'bf354166-8d40-404d-9f34-eb5f899ad857' }];
        const sportsmanCollection: ISportsman[] = [{ id: 'ABC' }];
        expectedResult = service.addSportsmanToCollectionIfMissing(sportsmanCollection, ...sportsmanArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const sportsman: ISportsman = { id: 'ABC' };
        const sportsman2: ISportsman = { id: 'CBA' };
        expectedResult = service.addSportsmanToCollectionIfMissing([], sportsman, sportsman2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(sportsman);
        expect(expectedResult).toContain(sportsman2);
      });

      it('should accept null and undefined values', () => {
        const sportsman: ISportsman = { id: 'ABC' };
        expectedResult = service.addSportsmanToCollectionIfMissing([], null, sportsman, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(sportsman);
      });

      it('should return initial array if no Sportsman is added', () => {
        const sportsmanCollection: ISportsman[] = [{ id: 'ABC' }];
        expectedResult = service.addSportsmanToCollectionIfMissing(sportsmanCollection, undefined, null);
        expect(expectedResult).toEqual(sportsmanCollection);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
