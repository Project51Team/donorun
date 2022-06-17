import dayjs from 'dayjs/esm';
import { ITransaction } from 'app/entities/transaction/transaction.model';
import { IMoneyRecipient } from 'app/entities/money-recipient/money-recipient.model';

export interface ITransactionGroup {
  id?: string;
  amountOfMoney?: number | null;
  message?: string | null;
  wasPaid?: boolean | null;
  dateOfPayment?: dayjs.Dayjs | null;
  createdDate?: dayjs.Dayjs | null;
  transactions?: ITransaction[] | null;
  recipient?: IMoneyRecipient | null;
}

export class TransactionGroup implements ITransactionGroup {
  constructor(
    public id?: string,
    public amountOfMoney?: number | null,
    public message?: string | null,
    public wasPaid?: boolean | null,
    public dateOfPayment?: dayjs.Dayjs | null,
    public createdDate?: dayjs.Dayjs | null,
    public transactions?: ITransaction[] | null,
    public recipient?: IMoneyRecipient | null
  ) {
    this.wasPaid = this.wasPaid ?? false;
  }
}

export function getTransactionGroupIdentifier(transactionGroup: ITransactionGroup): string | undefined {
  return transactionGroup.id;
}
