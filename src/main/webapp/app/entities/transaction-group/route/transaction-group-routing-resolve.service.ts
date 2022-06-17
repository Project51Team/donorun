import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ITransactionGroup, TransactionGroup } from '../transaction-group.model';
import { TransactionGroupService } from '../service/transaction-group.service';

@Injectable({ providedIn: 'root' })
export class TransactionGroupRoutingResolveService implements Resolve<ITransactionGroup> {
  constructor(protected service: TransactionGroupService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITransactionGroup> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((transactionGroup: HttpResponse<TransactionGroup>) => {
          if (transactionGroup.body) {
            return of(transactionGroup.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new TransactionGroup());
  }
}
