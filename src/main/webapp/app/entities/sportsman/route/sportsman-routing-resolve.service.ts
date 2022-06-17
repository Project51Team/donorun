import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ISportsman, Sportsman } from '../sportsman.model';
import { SportsmanService } from '../service/sportsman.service';

@Injectable({ providedIn: 'root' })
export class SportsmanRoutingResolveService implements Resolve<ISportsman> {
  constructor(protected service: SportsmanService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ISportsman> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((sportsman: HttpResponse<Sportsman>) => {
          if (sportsman.body) {
            return of(sportsman.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Sportsman());
  }
}
