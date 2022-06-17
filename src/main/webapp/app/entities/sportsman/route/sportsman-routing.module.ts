import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { SportsmanComponent } from '../list/sportsman.component';
import { SportsmanDetailComponent } from '../detail/sportsman-detail.component';
import { SportsmanUpdateComponent } from '../update/sportsman-update.component';
import { SportsmanRoutingResolveService } from './sportsman-routing-resolve.service';

const sportsmanRoute: Routes = [
  {
    path: '',
    component: SportsmanComponent,
    data: {
      defaultSort: 'id,asc',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: SportsmanDetailComponent,
    resolve: {
      sportsman: SportsmanRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: SportsmanUpdateComponent,
    resolve: {
      sportsman: SportsmanRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: SportsmanUpdateComponent,
    resolve: {
      sportsman: SportsmanRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(sportsmanRoute)],
  exports: [RouterModule],
})
export class SportsmanRoutingModule {}
