import dayjs from 'dayjs/esm';
import { IActivity } from 'app/entities/activity/activity.model';
import { ITransactionGroup } from 'app/entities/transaction-group/transaction-group.model';

export interface ITransaction {
  id?: string;
  amountOfMoney?: number | null;
  createdDate?: dayjs.Dayjs | null;
  activity?: IActivity | null;
  transactionGroup?: ITransactionGroup | null;
}

export class Transaction implements ITransaction {
  constructor(
    public id?: string,
    public amountOfMoney?: number | null,
    public createdDate?: dayjs.Dayjs | null,
    public activity?: IActivity | null,
    public transactionGroup?: ITransactionGroup | null
  ) {}
}

export function getTransactionIdentifier(transaction: ITransaction): string | undefined {
  return transaction.id;
}
