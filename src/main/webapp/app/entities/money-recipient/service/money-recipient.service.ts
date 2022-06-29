import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IMoneyRecipient, getMoneyRecipientIdentifier } from '../money-recipient.model';

export type EntityResponseType = HttpResponse<IMoneyRecipient>;
export type EntityArrayResponseType = HttpResponse<IMoneyRecipient[]>;

@Injectable({ providedIn: 'root' })
export class MoneyRecipientService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/money-recipients');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(moneyRecipient: IMoneyRecipient): Observable<EntityResponseType> {
    return this.http.post<IMoneyRecipient>(this.resourceUrl, moneyRecipient, { observe: 'response' });
  }

  update(moneyRecipient: IMoneyRecipient): Observable<EntityResponseType> {
    return this.http.put<IMoneyRecipient>(`${this.resourceUrl}/${getMoneyRecipientIdentifier(moneyRecipient) as number}`, moneyRecipient, {
      observe: 'response',
    });
  }

  partialUpdate(moneyRecipient: IMoneyRecipient): Observable<EntityResponseType> {
    return this.http.patch<IMoneyRecipient>(
      `${this.resourceUrl}/${getMoneyRecipientIdentifier(moneyRecipient) as number}`,
      moneyRecipient,
      { observe: 'response' }
    );
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IMoneyRecipient>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IMoneyRecipient[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  addMoneyRecipientToCollectionIfMissing(
    moneyRecipientCollection: IMoneyRecipient[],
    ...moneyRecipientsToCheck: (IMoneyRecipient | null | undefined)[]
  ): IMoneyRecipient[] {
    const moneyRecipients: IMoneyRecipient[] = moneyRecipientsToCheck.filter(isPresent);
    if (moneyRecipients.length > 0) {
      const moneyRecipientCollectionIdentifiers = moneyRecipientCollection.map(
        moneyRecipientItem => getMoneyRecipientIdentifier(moneyRecipientItem)!
      );
      const moneyRecipientsToAdd = moneyRecipients.filter(moneyRecipientItem => {
        const moneyRecipientIdentifier = getMoneyRecipientIdentifier(moneyRecipientItem);
        if (moneyRecipientIdentifier == null || moneyRecipientCollectionIdentifiers.includes(moneyRecipientIdentifier)) {
          return false;
        }
        moneyRecipientCollectionIdentifiers.push(moneyRecipientIdentifier);
        return true;
      });
      return [...moneyRecipientsToAdd, ...moneyRecipientCollection];
    }
    return moneyRecipientCollection;
  }
}
