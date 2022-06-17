import dayjs from 'dayjs/esm';
import { ISportsman } from 'app/entities/sportsman/sportsman.model';
import { SportType } from 'app/entities/enumerations/sport-type.model';

export interface IActivity {
  id?: string;
  distance?: number | null;
  avgPace?: number | null;
  movingTime?: string | null;
  calories?: number | null;
  avgHeartRate?: number | null;
  sportType?: SportType | null;
  valid?: boolean | null;
  publicActivity?: boolean | null;
  activityDate?: dayjs.Dayjs | null;
  createdDate?: dayjs.Dayjs | null;
  sportsman?: ISportsman | null;
}

export class Activity implements IActivity {
  constructor(
    public id?: string,
    public distance?: number | null,
    public avgPace?: number | null,
    public movingTime?: string | null,
    public calories?: number | null,
    public avgHeartRate?: number | null,
    public sportType?: SportType | null,
    public valid?: boolean | null,
    public publicActivity?: boolean | null,
    public activityDate?: dayjs.Dayjs | null,
    public createdDate?: dayjs.Dayjs | null,
    public sportsman?: ISportsman | null
  ) {
    this.valid = this.valid ?? false;
    this.publicActivity = this.publicActivity ?? false;
  }
}

export function getActivityIdentifier(activity: IActivity): string | undefined {
  return activity.id;
}
