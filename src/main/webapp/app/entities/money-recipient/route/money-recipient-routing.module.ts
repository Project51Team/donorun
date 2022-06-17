import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { MoneyRecipientComponent } from '../list/money-recipient.component';
import { MoneyRecipientDetailComponent } from '../detail/money-recipient-detail.component';
import { MoneyRecipientUpdateComponent } from '../update/money-recipient-update.component';
import { MoneyRecipientRoutingResolveService } from './money-recipient-routing-resolve.service';

const moneyRecipientRoute: Routes = [
  {
    path: '',
    component: MoneyRecipientComponent,
    data: {
      defaultSort: 'id,asc',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: MoneyRecipientDetailComponent,
    resolve: {
      moneyRecipient: MoneyRecipientRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: MoneyRecipientUpdateComponent,
    resolve: {
      moneyRecipient: MoneyRecipientRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: MoneyRecipientUpdateComponent,
    resolve: {
      moneyRecipient: MoneyRecipientRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(moneyRecipientRoute)],
  exports: [RouterModule],
})
export class MoneyRecipientRoutingModule {}
