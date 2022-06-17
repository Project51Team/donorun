import { ICompany } from 'app/entities/company/company.model';
import { ValueType } from 'app/entities/enumerations/value-type.model';

export interface ISetting {
  id?: string;
  code?: string | null;
  description?: string | null;
  type?: ValueType | null;
  value?: string | null;
  company?: ICompany | null;
}

export class Setting implements ISetting {
  constructor(
    public id?: string,
    public code?: string | null,
    public description?: string | null,
    public type?: ValueType | null,
    public value?: string | null,
    public company?: ICompany | null
  ) {}
}

export function getSettingIdentifier(setting: ISetting): string | undefined {
  return setting.id;
}
