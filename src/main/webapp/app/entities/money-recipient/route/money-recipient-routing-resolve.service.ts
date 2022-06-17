import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IMoneyRecipient, MoneyRecipient } from '../money-recipient.model';
import { MoneyRecipientService } from '../service/money-recipient.service';

@Injectable({ providedIn: 'root' })
export class MoneyRecipientRoutingResolveService implements Resolve<IMoneyRecipient> {
  constructor(protected service: MoneyRecipientService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IMoneyRecipient> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((moneyRecipient: HttpResponse<MoneyRecipient>) => {
          if (moneyRecipient.body) {
            return of(moneyRecipient.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new MoneyRecipient());
  }
}
