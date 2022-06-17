import { RecipientType } from 'app/entities/enumerations/recipient-type.model';

export interface IMoneyRecipient {
  id?: string;
  name?: string | null;
  description?: string | null;
  avatarUrl?: string | null;
  siteUrl?: string | null;
  recipientType?: RecipientType | null;
}

export class MoneyRecipient implements IMoneyRecipient {
  constructor(
    public id?: string,
    public name?: string | null,
    public description?: string | null,
    public avatarUrl?: string | null,
    public siteUrl?: string | null,
    public recipientType?: RecipientType | null
  ) {}
}

export function getMoneyRecipientIdentifier(moneyRecipient: IMoneyRecipient): string | undefined {
  return moneyRecipient.id;
}
