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
import { IUser } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/user.service';
import { SportType } from 'app/entities/enumerations/sport-type.model';

@Component({
  selector: 'jhi-activity-update',
  templateUrl: './activity-update.component.html',
})
export class ActivityUpdateComponent implements OnInit {
  isSaving = false;
  sportTypeValues = Object.keys(SportType);

  usersSharedCollection: IUser[] = [];

  editForm = this.fb.group({
    id: [],
    title: [],
    distance: [],
    avgPace: [],
    movingTime: [],
    calories: [],
    avgHeartRate: [],
    sportType: [],
    valid: [],
    publicActivity: [],
    amountOfMoney: [],
    wasPaid: [],
    activityDate: [],
    createdDate: [],
    sportsman: [],
  });

  constructor(
    protected activityService: ActivityService,
    protected userService: UserService,
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

  trackUserById(_index: number, item: IUser): string {
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
      title: activity.title,
      distance: activity.distance,
      avgPace: activity.avgPace,
      movingTime: activity.movingTime,
      calories: activity.calories,
      avgHeartRate: activity.avgHeartRate,
      sportType: activity.sportType,
      valid: activity.valid,
      publicActivity: activity.publicActivity,
      amountOfMoney: activity.amountOfMoney,
      wasPaid: activity.wasPaid,
      activityDate: activity.activityDate,
      createdDate: activity.createdDate ? activity.createdDate.format(DATE_TIME_FORMAT) : null,
      sportsman: activity.sportsman,
    });

    this.usersSharedCollection = this.userService.addUserToCollectionIfMissing(this.usersSharedCollection, activity.sportsman);
  }

  protected loadRelationshipsOptions(): void {
    this.userService
      .query()
      .pipe(map((res: HttpResponse<IUser[]>) => res.body ?? []))
      .pipe(map((users: IUser[]) => this.userService.addUserToCollectionIfMissing(users, this.editForm.get('sportsman')!.value)))
      .subscribe((users: IUser[]) => (this.usersSharedCollection = users));
  }

  protected createFromForm(): IActivity {
    return {
      ...new Activity(),
      id: this.editForm.get(['id'])!.value,
      title: this.editForm.get(['title'])!.value,
      distance: this.editForm.get(['distance'])!.value,
      avgPace: this.editForm.get(['avgPace'])!.value,
      movingTime: this.editForm.get(['movingTime'])!.value,
      calories: this.editForm.get(['calories'])!.value,
      avgHeartRate: this.editForm.get(['avgHeartRate'])!.value,
      sportType: this.editForm.get(['sportType'])!.value,
      valid: this.editForm.get(['valid'])!.value,
      publicActivity: this.editForm.get(['publicActivity'])!.value,
      amountOfMoney: this.editForm.get(['amountOfMoney'])!.value,
      wasPaid: this.editForm.get(['wasPaid'])!.value,
      activityDate: this.editForm.get(['activityDate'])!.value,
      createdDate: this.editForm.get(['createdDate'])!.value
        ? dayjs(this.editForm.get(['createdDate'])!.value, DATE_TIME_FORMAT)
        : undefined,
      sportsman: this.editForm.get(['sportsman'])!.value,
    };
  }
}
