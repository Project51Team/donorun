import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { FitnessAccountComponent } from '../list/fitness-account.component';
import { FitnessAccountDetailComponent } from '../detail/fitness-account-detail.component';
import { FitnessAccountUpdateComponent } from '../update/fitness-account-update.component';
import { FitnessAccountRoutingResolveService } from './fitness-account-routing-resolve.service';

const fitnessAccountRoute: Routes = [
  {
    path: '',
    component: FitnessAccountComponent,
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: FitnessAccountDetailComponent,
    resolve: {
      fitnessAccount: FitnessAccountRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: FitnessAccountUpdateComponent,
    resolve: {
      fitnessAccount: FitnessAccountRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: FitnessAccountUpdateComponent,
    resolve: {
      fitnessAccount: FitnessAccountRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(fitnessAccountRoute)],
  exports: [RouterModule],
})
export class FitnessAccountRoutingModule {}
