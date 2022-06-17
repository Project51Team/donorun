import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { TransactionGroupComponent } from '../list/transaction-group.component';
import { TransactionGroupDetailComponent } from '../detail/transaction-group-detail.component';
import { TransactionGroupUpdateComponent } from '../update/transaction-group-update.component';
import { TransactionGroupRoutingResolveService } from './transaction-group-routing-resolve.service';

const transactionGroupRoute: Routes = [
  {
    path: '',
    component: TransactionGroupComponent,
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: TransactionGroupDetailComponent,
    resolve: {
      transactionGroup: TransactionGroupRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: TransactionGroupUpdateComponent,
    resolve: {
      transactionGroup: TransactionGroupRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: TransactionGroupUpdateComponent,
    resolve: {
      transactionGroup: TransactionGroupRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(transactionGroupRoute)],
  exports: [RouterModule],
})
export class TransactionGroupRoutingModule {}
