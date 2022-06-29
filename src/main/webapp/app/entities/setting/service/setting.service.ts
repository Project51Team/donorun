import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ISetting, getSettingIdentifier } from '../setting.model';

export type EntityResponseType = HttpResponse<ISetting>;
export type EntityArrayResponseType = HttpResponse<ISetting[]>;

@Injectable({ providedIn: 'root' })
export class SettingService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/settings');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(setting: ISetting): Observable<EntityResponseType> {
    return this.http.post<ISetting>(this.resourceUrl, setting, { observe: 'response' });
  }

  update(setting: ISetting): Observable<EntityResponseType> {
    return this.http.put<ISetting>(`${this.resourceUrl}/${getSettingIdentifier(setting) as number}`, setting, { observe: 'response' });
  }

  partialUpdate(setting: ISetting): Observable<EntityResponseType> {
    return this.http.patch<ISetting>(`${this.resourceUrl}/${getSettingIdentifier(setting) as number}`, setting, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ISetting>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ISetting[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  addSettingToCollectionIfMissing(settingCollection: ISetting[], ...settingsToCheck: (ISetting | null | undefined)[]): ISetting[] {
    const settings: ISetting[] = settingsToCheck.filter(isPresent);
    if (settings.length > 0) {
      const settingCollectionIdentifiers = settingCollection.map(settingItem => getSettingIdentifier(settingItem)!);
      const settingsToAdd = settings.filter(settingItem => {
        const settingIdentifier = getSettingIdentifier(settingItem);
        if (settingIdentifier == null || settingCollectionIdentifiers.includes(settingIdentifier)) {
          return false;
        }
        settingCollectionIdentifiers.push(settingIdentifier);
        return true;
      });
      return [...settingsToAdd, ...settingCollection];
    }
    return settingCollection;
  }
}
