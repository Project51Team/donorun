import { IUser } from 'app/entities/user/user.model';
import { ICompany } from 'app/entities/company/company.model';

export interface ISportsman {
  id?: string;
  user?: IUser | null;
  company?: ICompany | null;
}

export class Sportsman implements ISportsman {
  constructor(public id?: string, public user?: IUser | null, public company?: ICompany | null) {}
}

export function getSportsmanIdentifier(sportsman: ISportsman): string | undefined {
  return sportsman.id;
}
