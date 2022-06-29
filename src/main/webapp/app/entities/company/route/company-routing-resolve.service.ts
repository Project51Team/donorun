import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ICompany, Company } from '../company.model';
import { CompanyService } from '../service/company.service';

@Injectable({ providedIn: 'root' })
export class CompanyRoutingResolveService implements Resolve<ICompany> {
  constructor(protected service: CompanyService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICompany> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((company: HttpResponse<Company>) => {
          if (company.body) {
            return of(company.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Company());
  }
}
