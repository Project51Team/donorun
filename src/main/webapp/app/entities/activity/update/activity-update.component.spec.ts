import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { ActivityService } from '../service/activity.service';
import { IActivity, Activity } from '../activity.model';
import { IFitnessAccount } from 'app/entities/fitness-account/fitness-account.model';
import { FitnessAccountService } from 'app/entities/fitness-account/service/fitness-account.service';

import { ActivityUpdateComponent } from './activity-update.component';

describe('Activity Management Update Component', () => {
  let comp: ActivityUpdateComponent;
  let fixture: ComponentFixture<ActivityUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let activityService: ActivityService;
  let fitnessAccountService: FitnessAccountService;

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
    fitnessAccountService = TestBed.inject(FitnessAccountService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call FitnessAccount query and add missing value', () => {
      const activity: IActivity = { id: 456 };
      const account: IFitnessAccount = { id: 79798 };
      activity.account = account;

      const fitnessAccountCollection: IFitnessAccount[] = [{ id: 46688 }];
      jest.spyOn(fitnessAccountService, 'query').mockReturnValue(of(new HttpResponse({ body: fitnessAccountCollection })));
      const additionalFitnessAccounts = [account];
      const expectedCollection: IFitnessAccount[] = [...additionalFitnessAccounts, ...fitnessAccountCollection];
      jest.spyOn(fitnessAccountService, 'addFitnessAccountToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ activity });
      comp.ngOnInit();

      expect(fitnessAccountService.query).toHaveBeenCalled();
      expect(fitnessAccountService.addFitnessAccountToCollectionIfMissing).toHaveBeenCalledWith(
        fitnessAccountCollection,
        ...additionalFitnessAccounts
      );
      expect(comp.fitnessAccountsSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const activity: IActivity = { id: 456 };
      const account: IFitnessAccount = { id: 43673 };
      activity.account = account;

      activatedRoute.data = of({ activity });
      comp.ngOnInit();

      expect(comp.editForm.value).toEqual(expect.objectContaining(activity));
      expect(comp.fitnessAccountsSharedCollection).toContain(account);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Activity>>();
      const activity = { id: 123 };
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
      const activity = { id: 123 };
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
    describe('trackFitnessAccountById', () => {
      it('Should return tracked FitnessAccount primary key', () => {
        const entity = { id: 123 };
        const trackResult = comp.trackFitnessAccountById(0, entity);
        expect(trackResult).toEqual(entity.id);
      });
    });
  });
});
