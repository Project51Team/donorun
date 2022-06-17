import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ITransactionGroup, getTransactionGroupIdentifier } from '../transaction-group.model';

export type EntityResponseType = HttpResponse<ITransactionGroup>;
export type EntityArrayResponseType = HttpResponse<ITransactionGroup[]>;

@Injectable({ providedIn: 'root' })
export class TransactionGroupService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/transaction-groups');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(transactionGroup: ITransactionGroup): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(transactionGroup);
    return this.http
      .post<ITransactionGroup>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(transactionGroup: ITransactionGroup): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(transactionGroup);
    return this.http
      .put<ITransactionGroup>(`${this.resourceUrl}/${getTransactionGroupIdentifier(transactionGroup) as string}`, copy, {
        observe: 'response',
      })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  partialUpdate(transactionGroup: ITransactionGroup): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(transactionGroup);
    return this.http
      .patch<ITransactionGroup>(`${this.resourceUrl}/${getTransactionGroupIdentifier(transactionGroup) as string}`, copy, {
        observe: 'response',
      })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: string): Observable<EntityResponseType> {
    return this.http
      .get<ITransactionGroup>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ITransactionGroup[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: string): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  addTransactionGroupToCollectionIfMissing(
    transactionGroupCollection: ITransactionGroup[],
    ...transactionGroupsToCheck: (ITransactionGroup | null | undefined)[]
  ): ITransactionGroup[] {
    const transactionGroups: ITransactionGroup[] = transactionGroupsToCheck.filter(isPresent);
    if (transactionGroups.length > 0) {
      const transactionGroupCollectionIdentifiers = transactionGroupCollection.map(
        transactionGroupItem => getTransactionGroupIdentifier(transactionGroupItem)!
      );
      const transactionGroupsToAdd = transactionGroups.filter(transactionGroupItem => {
        const transactionGroupIdentifier = getTransactionGroupIdentifier(transactionGroupItem);
        if (transactionGroupIdentifier == null || transactionGroupCollectionIdentifiers.includes(transactionGroupIdentifier)) {
          return false;
        }
        transactionGroupCollectionIdentifiers.push(transactionGroupIdentifier);
        return true;
      });
      return [...transactionGroupsToAdd, ...transactionGroupCollection];
    }
    return transactionGroupCollection;
  }

  protected convertDateFromClient(transactionGroup: ITransactionGroup): ITransactionGroup {
    return Object.assign({}, transactionGroup, {
      dateOfPayment: transactionGroup.dateOfPayment?.isValid() ? transactionGroup.dateOfPayment.toJSON() : undefined,
      createdDate: transactionGroup.createdDate?.isValid() ? transactionGroup.createdDate.toJSON() : undefined,
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
      res.body.forEach((transactionGroup: ITransactionGroup) => {
        transactionGroup.dateOfPayment = transactionGroup.dateOfPayment ? dayjs(transactionGroup.dateOfPayment) : undefined;
        transactionGroup.createdDate = transactionGroup.createdDate ? dayjs(transactionGroup.createdDate) : undefined;
      });
    }
    return res;
  }
}
