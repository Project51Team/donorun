import dayjs from 'dayjs/esm';
import { IUser } from 'app/entities/user/user.model';
import { FitnessAccountType } from 'app/entities/enumerations/fitness-account-type.model';

export interface IFitnessAccount {
  id?: number;
  fitnessAccountType?: FitnessAccountType | null;
  url?: string | null;
  nickname?: string | null;
  isActive?: boolean | null;
  createdDate?: dayjs.Dayjs | null;
  employee?: IUser | null;
}

export class FitnessAccount implements IFitnessAccount {
  constructor(
    public id?: number,
    public fitnessAccountType?: FitnessAccountType | null,
    public url?: string | null,
    public nickname?: string | null,
    public isActive?: boolean | null,
    public createdDate?: dayjs.Dayjs | null,
    public employee?: IUser | null
  ) {
    this.isActive = this.isActive ?? false;
  }
}

export function getFitnessAccountIdentifier(fitnessAccount: IFitnessAccount): number | undefined {
  return fitnessAccount.id;
}
