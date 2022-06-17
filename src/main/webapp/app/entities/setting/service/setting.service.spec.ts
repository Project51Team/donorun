import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ValueType } from 'app/entities/enumerations/value-type.model';
import { ISetting, Setting } from '../setting.model';

import { SettingService } from './setting.service';

describe('Setting Service', () => {
  let service: SettingService;
  let httpMock: HttpTestingController;
  let elemDefault: ISetting;
  let expectedResult: ISetting | ISetting[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(SettingService);
    httpMock = TestBed.inject(HttpTestingController);

    elemDefault = {
      id: 'AAAAAAA',
      code: 'AAAAAAA',
      description: 'AAAAAAA',
      type: ValueType.INT,
      value: 'AAAAAAA',
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

    it('should create a Setting', () => {
      const returnedFromService = Object.assign(
        {
          id: 'ID',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.create(new Setting()).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a Setting', () => {
      const returnedFromService = Object.assign(
        {
          id: 'BBBBBB',
          code: 'BBBBBB',
          description: 'BBBBBB',
          type: 'BBBBBB',
          value: 'BBBBBB',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.update(expected).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a Setting', () => {
      const patchObject = Object.assign(
        {
          code: 'BBBBBB',
          type: 'BBBBBB',
        },
        new Setting()
      );

      const returnedFromService = Object.assign(patchObject, elemDefault);

      const expected = Object.assign({}, returnedFromService);

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of Setting', () => {
      const returnedFromService = Object.assign(
        {
          id: 'BBBBBB',
          code: 'BBBBBB',
          description: 'BBBBBB',
          type: 'BBBBBB',
          value: 'BBBBBB',
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

    it('should delete a Setting', () => {
      service.delete('ABC').subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult);
    });

    describe('addSettingToCollectionIfMissing', () => {
      it('should add a Setting to an empty array', () => {
        const setting: ISetting = { id: 'ABC' };
        expectedResult = service.addSettingToCollectionIfMissing([], setting);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(setting);
      });

      it('should not add a Setting to an array that contains it', () => {
        const setting: ISetting = { id: 'ABC' };
        const settingCollection: ISetting[] = [
          {
            ...setting,
          },
          { id: 'CBA' },
        ];
        expectedResult = service.addSettingToCollectionIfMissing(settingCollection, setting);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a Setting to an array that doesn't contain it", () => {
        const setting: ISetting = { id: 'ABC' };
        const settingCollection: ISetting[] = [{ id: 'CBA' }];
        expectedResult = service.addSettingToCollectionIfMissing(settingCollection, setting);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(setting);
      });

      it('should add only unique Setting to an array', () => {
        const settingArray: ISetting[] = [{ id: 'ABC' }, { id: 'CBA' }, { id: '862e70dd-0895-46d3-b52f-65018bc84fd8' }];
        const settingCollection: ISetting[] = [{ id: 'ABC' }];
        expectedResult = service.addSettingToCollectionIfMissing(settingCollection, ...settingArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const setting: ISetting = { id: 'ABC' };
        const setting2: ISetting = { id: 'CBA' };
        expectedResult = service.addSettingToCollectionIfMissing([], setting, setting2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(setting);
        expect(expectedResult).toContain(setting2);
      });

      it('should accept null and undefined values', () => {
        const setting: ISetting = { id: 'ABC' };
        expectedResult = service.addSettingToCollectionIfMissing([], null, setting, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(setting);
      });

      it('should return initial array if no Setting is added', () => {
        const settingCollection: ISetting[] = [{ id: 'ABC' }];
        expectedResult = service.addSettingToCollectionIfMissing(settingCollection, undefined, null);
        expect(expectedResult).toEqual(settingCollection);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
