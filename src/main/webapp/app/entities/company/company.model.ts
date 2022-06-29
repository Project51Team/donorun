import { IUser } from 'app/entities/user/user.model';

export interface ICompany {
  id?: number;
  name?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  url?: string | null;
  publicActivities?: boolean | null;
  employees?: IUser[] | null;
}

export class Company implements ICompany {
  constructor(
    public id?: number,
    public name?: string | null,
    public description?: string | null,
    public imageUrl?: string | null,
    public url?: string | null,
    public publicActivities?: boolean | null,
    public employees?: IUser[] | null
  ) {
    this.publicActivities = this.publicActivities ?? false;
  }
}

export function getCompanyIdentifier(company: ICompany): number | undefined {
  return company.id;
}
