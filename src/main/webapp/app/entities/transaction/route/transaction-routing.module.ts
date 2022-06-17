import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { TransactionComponent } from '../list/transaction.component';
import { TransactionDetailComponent } from '../detail/transaction-detail.component';
import { TransactionUpdateComponent } from '../update/transaction-update.component';
import { TransactionRoutingResolveService } from './transaction-routing-resolve.service';

const transactionRoute: Routes = [
  {
    path: '',
    component: TransactionComponent,
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: TransactionDetailComponent,
    resolve: {
      transaction: TransactionRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: TransactionUpdateComponent,
    resolve: {
      transaction: TransactionRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: TransactionUpdateComponent,
    resolve: {
      transaction: TransactionRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(transactionRoute)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}
