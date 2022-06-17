import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import dayjs from 'dayjs/esm';

import { DATE_FORMAT, DATE_TIME_FORMAT } from 'app/config/input.constants';
import { SportType } from 'app/entities/enumerations/sport-type.model';
import { IActivity, Activity } from '../activity.model';

import { ActivityService } from './activity.service';

describe('Activity Service', () => {
  let service: ActivityService;
  let httpMock: HttpTestingController;
  let elemDefault: IActivity;
  let expectedResult: IActivity | IActivity[] | boolean | null;
  let currentDate: dayjs.Dayjs;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(ActivityService);
    httpMock = TestBed.inject(HttpTestingController);
    currentDate = dayjs();

    elemDefault = {
      id: 'AAAAAAA',
      distance: 0,
      avgPace: 0,
      movingTime: 'PT1S',
      calories: 0,
      avgHeartRate: 0,
      sportType: SportType.RUN,
      valid: false,
      publicActivity: false,
      activityDate: currentDate,
      createdDate: currentDate,
    };
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = Object.assign(
        {
          activityDate: currentDate.format(DATE_FORMAT),
          createdDate: currentDate.format(DATE_TIME_FORMAT),
        },
        elemDefault
      );

      service.find('ABC').subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(elemDefault);
    });

    it('should create a Activity', () => {
      const returnedFromService = Object.assign(
        {
          id: 'ID',
          activityDate: currentDate.format(DATE_FORMAT),
          createdDate: currentDate.format(DATE_TIME_FORMAT),
        },
        elemDefault
      );

      const expected = Object.assign(
        {
          activityDate: currentDate,
          createdDate: currentDate,
        },
        returnedFromService
      );

      service.create(new Activity()).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a Activity', () => {
      const returnedFromService = Object.assign(
        {
          id: 'BBBBBB',
          distance: 1,
          avgPace: 1,
          movingTime: 'BBBBBB',
          calories: 1,
          avgHeartRate: 1,
          sportType: 'BBBBBB',
          valid: true,
          publicActivity: true,
          activityDate: currentDate.format(DATE_FORMAT),
          createdDate: currentDate.format(DATE_TIME_FORMAT),
        },
        elemDefault
      );

      const expected = Object.assign(
        {
          activityDate: currentDate,
          createdDate: currentDate,
        },
        returnedFromService
      );

      service.update(expected).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a Activity', () => {
      const patchObject = Object.assign({}, new Activity());

      const returnedFromService = Object.assign(patchObject, elemDefault);

      const expected = Object.assign(
        {
          activityDate: currentDate,
          createdDate: currentDate,
        },
        returnedFromService
      );

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of Activity', () => {
      const returnedFromService = Object.assign(
        {
          id: 'BBBBBB',
          distance: 1,
          avgPace: 1,
          movingTime: 'BBBBBB',
          calories: 1,
          avgHeartRate: 1,
          sportType: 'BBBBBB',
          valid: true,
          publicActivity: true,
          activityDate: currentDate.format(DATE_FORMAT),
          createdDate: currentDate.format(DATE_TIME_FORMAT),
        },
        elemDefault
      );

      const expected = Object.assign(
        {
          activityDate: currentDate,
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

    it('should delete a Activity', () => {
      service.delete('ABC').subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult);
    });

    describe('addActivityToCollectionIfMissing', () => {
      it('should add a Activity to an empty array', () => {
        const activity: IActivity = { id: 'ABC' };
        expectedResult = service.addActivityToCollectionIfMissing([], activity);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(activity);
      });

      it('should not add a Activity to an array that contains it', () => {
        const activity: IActivity = { id: 'ABC' };
        const activityCollection: IActivity[] = [
          {
            ...activity,
          },
          { id: 'CBA' },
        ];
        expectedResult = service.addActivityToCollectionIfMissing(activityCollection, activity);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a Activity to an array that doesn't contain it", () => {
        const activity: IActivity = { id: 'ABC' };
        const activityCollection: IActivity[] = [{ id: 'CBA' }];
        expectedResult = service.addActivityToCollectionIfMissing(activityCollection, activity);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(activity);
      });

      it('should add only unique Activity to an array', () => {
        const activityArray: IActivity[] = [{ id: 'ABC' }, { id: 'CBA' }, { id: '98fa648f-5150-4cbf-837d-ecb0abe55e35' }];
        const activityCollection: IActivity[] = [{ id: 'ABC' }];
        expectedResult = service.addActivityToCollectionIfMissing(activityCollection, ...activityArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const activity: IActivity = { id: 'ABC' };
        const activity2: IActivity = { id: 'CBA' };
        expectedResult = service.addActivityToCollectionIfMissing([], activity, activity2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(activity);
        expect(expectedResult).toContain(activity2);
      });

      it('should accept null and undefined values', () => {
        const activity: IActivity = { id: 'ABC' };
        expectedResult = service.addActivityToCollectionIfMissing([], null, activity, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(activity);
      });

      it('should return initial array if no Activity is added', () => {
        const activityCollection: IActivity[] = [{ id: 'ABC' }];
        expectedResult = service.addActivityToCollectionIfMissing(activityCollection, undefined, null);
        expect(expectedResult).toEqual(activityCollection);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
