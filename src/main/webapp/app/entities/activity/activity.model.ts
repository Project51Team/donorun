import dayjs from 'dayjs/esm';
import { IFitnessAccount } from 'app/entities/fitness-account/fitness-account.model';
import { ITransaction } from 'app/entities/transaction/transaction.model';
import { SportType } from 'app/entities/enumerations/sport-type.model';

export interface IActivity {
  id?: number;
  title?: string | null;
  distance?: number | null;
  avgPace?: number | null;
  movingTime?: string | null;
  calories?: number | null;
  avgHeartRate?: number | null;
  sportType?: SportType | null;
  imageUrl?: string | null;
  valid?: boolean | null;
  publicActivity?: boolean | null;
  amountOfMoney?: number | null;
  wasPaid?: boolean | null;
  activityDate?: dayjs.Dayjs | null;
  createdDate?: dayjs.Dayjs | null;
  account?: IFitnessAccount | null;
  transactions?: ITransaction[] | null;
}

export class Activity implements IActivity {
  constructor(
    public id?: number,
    public title?: string | null,
    public distance?: number | null,
    public avgPace?: number | null,
    public movingTime?: string | null,
    public calories?: number | null,
    public avgHeartRate?: number | null,
    public sportType?: SportType | null,
    public imageUrl?: string | null,
    public valid?: boolean | null,
    public publicActivity?: boolean | null,
    public amountOfMoney?: number | null,
    public wasPaid?: boolean | null,
    public activityDate?: dayjs.Dayjs | null,
    public createdDate?: dayjs.Dayjs | null,
    public account?: IFitnessAccount | null,
    public transactions?: ITransaction[] | null
  ) {
    this.valid = this.valid ?? false;
    this.publicActivity = this.publicActivity ?? false;
    this.wasPaid = this.wasPaid ?? false;
  }
}

export function getActivityIdentifier(activity: IActivity): number | undefined {
  return activity.id;
}
