import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ITransaction, getTransactionIdentifier } from '../transaction.model';

export type EntityResponseType = HttpResponse<ITransaction>;
export type EntityArrayResponseType = HttpResponse<ITransaction[]>;

@Injectable({ providedIn: 'root' })
export class TransactionService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/transactions');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(transaction: ITransaction): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(transaction);
    return this.http
      .post<ITransaction>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(transaction: ITransaction): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(transaction);
    return this.http
      .put<ITransaction>(`${this.resourceUrl}/${getTransactionIdentifier(transaction) as number}`, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  partialUpdate(transaction: ITransaction): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(transaction);
    return this.http
      .patch<ITransaction>(`${this.resourceUrl}/${getTransactionIdentifier(transaction) as number}`, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ITransaction>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ITransaction[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  addTransactionToCollectionIfMissing(
    transactionCollection: ITransaction[],
    ...transactionsToCheck: (ITransaction | null | undefined)[]
  ): ITransaction[] {
    const transactions: ITransaction[] = transactionsToCheck.filter(isPresent);
    if (transactions.length > 0) {
      const transactionCollectionIdentifiers = transactionCollection.map(transactionItem => getTransactionIdentifier(transactionItem)!);
      const transactionsToAdd = transactions.filter(transactionItem => {
        const transactionIdentifier = getTransactionIdentifier(transactionItem);
        if (transactionIdentifier == null || transactionCollectionIdentifiers.includes(transactionIdentifier)) {
          return false;
        }
        transactionCollectionIdentifiers.push(transactionIdentifier);
        return true;
      });
      return [...transactionsToAdd, ...transactionCollection];
    }
    return transactionCollection;
  }

  protected convertDateFromClient(transaction: ITransaction): ITransaction {
    return Object.assign({}, transaction, {
      dateOfPayment: transaction.dateOfPayment?.isValid() ? transaction.dateOfPayment.toJSON() : undefined,
      createdDate: transaction.createdDate?.isValid() ? transaction.createdDate.toJSON() : undefined,
    });
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateOfPayment = res.body.dateOfPayment ? dayjs(res.body.dateOfPayment) : undefined;
      res.body.createdDate = res.body.createdDate ? dayjs(res.body.createdDate) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((transaction: ITransaction) => {
        transaction.dateOfPayment = transaction.dateOfPayment ? dayjs(transaction.dateOfPayment) : undefined;
        transaction.createdDate = transaction.createdDate ? dayjs(transaction.createdDate) : undefined;
      });
    }
    return res;
  }
}
