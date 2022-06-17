import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';

import { IActivity, Activity } from '../activity.model';
import { ActivityService } from '../service/activity.service';
import { ISportsman } from 'app/entities/sportsman/sportsman.model';
import { SportsmanService } from 'app/entities/sportsman/service/sportsman.service';
import { SportType } from 'app/entities/enumerations/sport-type.model';

@Component({
  selector: 'jhi-activity-update',
  templateUrl: './activity-update.component.html',
})
export class ActivityUpdateComponent implements OnInit {
  isSaving = false;
  sportTypeValues = Object.keys(SportType);

  sportsmenSharedCollection: ISportsman[] = [];

  editForm = this.fb.group({
    id: [],
    distance: [],
    avgPace: [],
    movingTime: [],
    calories: [],
    avgHeartRate: [],
    sportType: [],
    valid: [],
    publicActivity: [],
    activityDate: [],
    createdDate: [],
    sportsman: [],
  });

  constructor(
    protected activityService: ActivityService,
    protected sportsmanService: SportsmanService,
    protected activatedRoute: ActivatedRoute,
    protected fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ activity }) => {
      if (activity.id === undefined) {
        const today = dayjs().startOf('day');
        activity.createdDate = today;
      }

      this.updateForm(activity);

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const activity = this.createFromForm();
    if (activity.id !== undefined) {
      this.subscribeToSaveResponse(this.activityService.update(activity));
    } else {
      this.subscribeToSaveResponse(this.activityService.create(activity));
    }
  }

  trackSportsmanById(_index: number, item: ISportsman): string {
    return item.id!;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IActivity>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(activity: IActivity): void {
    this.editForm.patchValue({
      id: activity.id,
      distance: activity.distance,
      avgPace: activity.avgPace,
      movingTime: activity.movingTime,
      calories: activity.calories,
      avgHeartRate: activity.avgHeartRate,
      sportType: activity.sportType,
      valid: activity.valid,
      publicActivity: activity.publicActivity,
      activityDate: activity.activityDate,
      createdDate: activity.createdDate ? activity.createdDate.format(DATE_TIME_FORMAT) : null,
      sportsman: activity.sportsman,
    });

    this.sportsmenSharedCollection = this.sportsmanService.addSportsmanToCollectionIfMissing(
      this.sportsmenSharedCollection,
      activity.sportsman
    );
  }

  protected loadRelationshipsOptions(): void {
    this.sportsmanService
      .query()
      .pipe(map((res: HttpResponse<ISportsman[]>) => res.body ?? []))
      .pipe(
        map((sportsmen: ISportsman[]) =>
          this.sportsmanService.addSportsmanToCollectionIfMissing(sportsmen, this.editForm.get('sportsman')!.value)
        )
      )
      .subscribe((sportsmen: ISportsman[]) => (this.sportsmenSharedCollection = sportsmen));
  }

  protected createFromForm(): IActivity {
    return {
      ...new Activity(),
      id: this.editForm.get(['id'])!.value,
      distance: this.editForm.get(['distance'])!.value,
      avgPace: this.editForm.get(['avgPace'])!.value,
      movingTime: this.editForm.get(['movingTime'])!.value,
      calories: this.editForm.get(['calories'])!.value,
      avgHeartRate: this.editForm.get(['avgHeartRate'])!.value,
      sportType: this.editForm.get(['sportType'])!.value,
      valid: this.editForm.get(['valid'])!.value,
      publicActivity: this.editForm.get(['publicActivity'])!.value,
      activityDate: this.editForm.get(['activityDate'])!.value,
      createdDate: this.editForm.get(['createdDate'])!.value
        ? dayjs(this.editForm.get(['createdDate'])!.value, DATE_TIME_FORMAT)
        : undefined,
      sportsman: this.editForm.get(['sportsman'])!.value,
    };
  }
}
