import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IFitnessAccount, FitnessAccount } from '../fitness-account.model';
import { FitnessAccountService } from '../service/fitness-account.service';

@Injectable({ providedIn: 'root' })
export class FitnessAccountRoutingResolveService implements Resolve<IFitnessAccount> {
  constructor(protected service: FitnessAccountService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IFitnessAccount> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((fitnessAccount: HttpResponse<FitnessAccount>) => {
          if (fitnessAccount.body) {
            return of(fitnessAccount.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new FitnessAccount());
  }
}
