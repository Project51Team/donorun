import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { ActivityService } from '../service/activity.service';
import { IActivity, Activity } from '../activity.model';
import { ISportsman } from 'app/entities/sportsman/sportsman.model';
import { SportsmanService } from 'app/entities/sportsman/service/sportsman.service';

import { ActivityUpdateComponent } from './activity-update.component';

describe('Activity Management Update Component', () => {
  let comp: ActivityUpdateComponent;
  let fixture: ComponentFixture<ActivityUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let activityService: ActivityService;
  let sportsmanService: SportsmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [ActivityUpdateComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(ActivityUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(ActivityUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    activityService = TestBed.inject(ActivityService);
    sportsmanService = TestBed.inject(SportsmanService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call Sportsman query and add missing value', () => {
      const activity: IActivity = { id: 'CBA' };
      const sportsman: ISportsman = { id: '9e76a45d-d86b-4213-9821-c5e15826f6d1' };
      activity.sportsman = sportsman;

      const sportsmanCollection: ISportsman[] = [{ id: '54fb0b3c-21c9-43f3-93fa-e31fa1c38717' }];
      jest.spyOn(sportsmanService, 'query').mockReturnValue(of(new HttpResponse({ body: sportsmanCollection })));
      const additionalSportsmen = [sportsman];
      const expectedCollection: ISportsman[] = [...additionalSportsmen, ...sportsmanCollection];
      jest.spyOn(sportsmanService, 'addSportsmanToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ activity });
      comp.ngOnInit();

      expect(sportsmanService.query).toHaveBeenCalled();
      expect(sportsmanService.addSportsmanToCollectionIfMissing).toHaveBeenCalledWith(sportsmanCollection, ...additionalSportsmen);
      expect(comp.sportsmenSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const activity: IActivity = { id: 'CBA' };
      const sportsman: ISportsman = { id: '3e785944-5773-45e1-9018-40c78aeabc53' };
      activity.sportsman = sportsman;

      activatedRoute.data = of({ activity });
      comp.ngOnInit();

      expect(comp.editForm.value).toEqual(expect.objectContaining(activity));
      expect(comp.sportsmenSharedCollection).toContain(sportsman);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Activity>>();
      const activity = { id: 'ABC' };
      jest.spyOn(activityService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ activity });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: activity }));
      saveSubject.complete();

      // THEN
      expect(comp.previousState).toHaveBeenCalled();
      expect(activityService.update).toHaveBeenCalledWith(activity);
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Activity>>();
      const activity = new Activity();
      jest.spyOn(activityService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ activity });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: activity }));
      saveSubject.complete();

      // THEN
      expect(activityService.create).toHaveBeenCalledWith(activity);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Activity>>();
      const activity = { id: 'ABC' };
      jest.spyOn(activityService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ activity });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(activityService.update).toHaveBeenCalledWith(activity);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Tracking relationships identifiers', () => {
    describe('trackSportsmanById', () => {
      it('Should return tracked Sportsman primary key', () => {
        const entity = { id: 'ABC' };
        const trackResult = comp.trackSportsmanById(0, entity);
        expect(trackResult).toEqual(entity.id);
      });
    });
  });
});
