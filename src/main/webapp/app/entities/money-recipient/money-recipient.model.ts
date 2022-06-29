import { RecipientType } from 'app/entities/enumerations/recipient-type.model';

export interface IMoneyRecipient {
  id?: number;
  name?: string | null;
  description?: string | null;
  avatarUrl?: string | null;
  siteUrl?: string | null;
  recipientType?: RecipientType | null;
  accountDetails?: string | null;
}

export class MoneyRecipient implements IMoneyRecipient {
  constructor(
    public id?: number,
    public name?: string | null,
    public description?: string | null,
    public avatarUrl?: string | null,
    public siteUrl?: string | null,
    public recipientType?: RecipientType | null,
    public accountDetails?: string | null
  ) {}
}

export function getMoneyRecipientIdentifier(moneyRecipient: IMoneyRecipient): number | undefined {
  return moneyRecipient.id;
}
