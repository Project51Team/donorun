import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ISportsman, getSportsmanIdentifier } from '../sportsman.model';

export type EntityResponseType = HttpResponse<ISportsman>;
export type EntityArrayResponseType = HttpResponse<ISportsman[]>;

@Injectable({ providedIn: 'root' })
export class SportsmanService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/sportsmen');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(sportsman: ISportsman): Observable<EntityResponseType> {
    return this.http.post<ISportsman>(this.resourceUrl, sportsman, { observe: 'response' });
  }

  update(sportsman: ISportsman): Observable<EntityResponseType> {
    return this.http.put<ISportsman>(`${this.resourceUrl}/${getSportsmanIdentifier(sportsman) as string}`, sportsman, {
      observe: 'response',
    });
  }

  partialUpdate(sportsman: ISportsman): Observable<EntityResponseType> {
    return this.http.patch<ISportsman>(`${this.resourceUrl}/${getSportsmanIdentifier(sportsman) as string}`, sportsman, {
      observe: 'response',
    });
  }

  find(id: string): Observable<EntityResponseType> {
    return this.http.get<ISportsman>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ISportsman[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  addSportsmanToCollectionIfMissing(
    sportsmanCollection: ISportsman[],
    ...sportsmenToCheck: (ISportsman | null | undefined)[]
  ): ISportsman[] {
    const sportsmen: ISportsman[] = sportsmenToCheck.filter(isPresent);
    if (sportsmen.length > 0) {
      const sportsmanCollectionIdentifiers = sportsmanCollection.map(sportsmanItem => getSportsmanIdentifier(sportsmanItem)!);
      const sportsmenToAdd = sportsmen.filter(sportsmanItem => {
        const sportsmanIdentifier = getSportsmanIdentifier(sportsmanItem);
        if (sportsmanIdentifier == null || sportsmanCollectionIdentifiers.includes(sportsmanIdentifier)) {
          return false;
        }
        sportsmanCollectionIdentifiers.push(sportsmanIdentifier);
        return true;
      });
      return [...sportsmenToAdd, ...sportsmanCollection];
    }
    return sportsmanCollection;
  }
}
