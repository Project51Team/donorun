import dayjs from 'dayjs/esm';
import { IMoneyRecipient } from 'app/entities/money-recipient/money-recipient.model';
import { IActivity } from 'app/entities/activity/activity.model';

export interface ITransaction {
  id?: number;
  sumOfMoney?: number | null;
  message?: string | null;
  wasPaid?: boolean | null;
  dateOfPayment?: dayjs.Dayjs | null;
  createdDate?: dayjs.Dayjs | null;
  recipient?: IMoneyRecipient | null;
  activities?: IActivity[] | null;
}

export class Transaction implements ITransaction {
  constructor(
    public id?: number,
    public sumOfMoney?: number | null,
    public message?: string | null,
    public wasPaid?: boolean | null,
    public dateOfPayment?: dayjs.Dayjs | null,
    public createdDate?: dayjs.Dayjs | null,
    public recipient?: IMoneyRecipient | null,
    public activities?: IActivity[] | null
  ) {
    this.wasPaid = this.wasPaid ?? false;
  }
}

export function getTransactionIdentifier(transaction: ITransaction): number | undefined {
  return transaction.id;
}
