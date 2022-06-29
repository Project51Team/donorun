import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ICompany, getCompanyIdentifier } from '../company.model';

export type EntityResponseType = HttpResponse<ICompany>;
export type EntityArrayResponseType = HttpResponse<ICompany[]>;

@Injectable({ providedIn: 'root' })
export class CompanyService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/companies');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(company: ICompany): Observable<EntityResponseType> {
    return this.http.post<ICompany>(this.resourceUrl, company, { observe: 'response' });
  }

  update(company: ICompany): Observable<EntityResponseType> {
    return this.http.put<ICompany>(`${this.resourceUrl}/${getCompanyIdentifier(company) as number}`, company, { observe: 'response' });
  }

  partialUpdate(company: ICompany): Observable<EntityResponseType> {
    return this.http.patch<ICompany>(`${this.resourceUrl}/${getCompanyIdentifier(company) as number}`, company, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICompany>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICompany[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  addCompanyToCollectionIfMissing(companyCollection: ICompany[], ...companiesToCheck: (ICompany | null | undefined)[]): ICompany[] {
    const companies: ICompany[] = companiesToCheck.filter(isPresent);
    if (companies.length > 0) {
      const companyCollectionIdentifiers = companyCollection.map(companyItem => getCompanyIdentifier(companyItem)!);
      const companiesToAdd = companies.filter(companyItem => {
        const companyIdentifier = getCompanyIdentifier(companyItem);
        if (companyIdentifier == null || companyCollectionIdentifiers.includes(companyIdentifier)) {
          return false;
        }
        companyCollectionIdentifiers.push(companyIdentifier);
        return true;
      });
      return [...companiesToAdd, ...companyCollection];
    }
    return companyCollection;
  }
}
