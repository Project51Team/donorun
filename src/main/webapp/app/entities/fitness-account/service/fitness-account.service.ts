import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IFitnessAccount, getFitnessAccountIdentifier } from '../fitness-account.model';

export type EntityResponseType = HttpResponse<IFitnessAccount>;
export type EntityArrayResponseType = HttpResponse<IFitnessAccount[]>;

@Injectable({ providedIn: 'root' })
export class FitnessAccountService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/fitness-accounts');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(fitnessAccount: IFitnessAccount): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(fitnessAccount);
    return this.http
      .post<IFitnessAccount>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(fitnessAccount: IFitnessAccount): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(fitnessAccount);
    return this.http
      .put<IFitnessAccount>(`${this.resourceUrl}/${getFitnessAccountIdentifier(fitnessAccount) as number}`, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  partialUpdate(fitnessAccount: IFitnessAccount): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(fitnessAccount);
    return this.http
      .patch<IFitnessAccount>(`${this.resourceUrl}/${getFitnessAccountIdentifier(fitnessAccount) as number}`, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IFitnessAccount>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IFitnessAccount[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  addFitnessAccountToCollectionIfMissing(
    fitnessAccountCollection: IFitnessAccount[],
    ...fitnessAccountsToCheck: (IFitnessAccount | null | undefined)[]
  ): IFitnessAccount[] {
    const fitnessAccounts: IFitnessAccount[] = fitnessAccountsToCheck.filter(isPresent);
    if (fitnessAccounts.length > 0) {
      const fitnessAccountCollectionIdentifiers = fitnessAccountCollection.map(
        fitnessAccountItem => getFitnessAccountIdentifier(fitnessAccountItem)!
      );
      const fitnessAccountsToAdd = fitnessAccounts.filter(fitnessAccountItem => {
        const fitnessAccountIdentifier = getFitnessAccountIdentifier(fitnessAccountItem);
        if (fitnessAccountIdentifier == null || fitnessAccountCollectionIdentifiers.includes(fitnessAccountIdentifier)) {
          return false;
        }
        fitnessAccountCollectionIdentifiers.push(fitnessAccountIdentifier);
        return true;
      });
      return [...fitnessAccountsToAdd, ...fitnessAccountCollection];
    }
    return fitnessAccountCollection;
  }

  protected convertDateFromClient(fitnessAccount: IFitnessAccount): IFitnessAccount {
    return Object.assign({}, fitnessAccount, {
      createdDate: fitnessAccount.createdDate?.isValid() ? fitnessAccount.createdDate.toJSON() : undefined,
    });
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.createdDate = res.body.createdDate ? dayjs(res.body.createdDate) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((fitnessAccount: IFitnessAccount) => {
        fitnessAccount.createdDate = fitnessAccount.createdDate ? dayjs(fitnessAccount.createdDate) : undefined;
      });
    }
    return res;
  }
}
