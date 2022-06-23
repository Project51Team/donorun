import { IUser } from 'app/entities/user/user.model';

export interface ICompany {
  id?: string;
  name?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  siteUrl?: string | null;
  publicActivities?: boolean | null;
  employees?: IUser[] | null;
}

export class Company implements ICompany {
  constructor(
    public id?: string,
    public name?: string | null,
    public description?: string | null,
    public imageUrl?: string | null,
    public siteUrl?: string | null,
    public publicActivities?: boolean | null,
    public employees?: IUser[] | null
  ) {
    this.publicActivities = this.publicActivities ?? false;
  }
}

export function getCompanyIdentifier(company: ICompany): string | undefined {
  return company.id;
}
