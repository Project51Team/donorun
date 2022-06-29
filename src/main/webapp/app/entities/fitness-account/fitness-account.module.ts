import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { FitnessAccountComponent } from './list/fitness-account.component';
import { FitnessAccountDetailComponent } from './detail/fitness-account-detail.component';
import { FitnessAccountUpdateComponent } from './update/fitness-account-update.component';
import { FitnessAccountDeleteDialogComponent } from './delete/fitness-account-delete-dialog.component';
import { FitnessAccountRoutingModule } from './route/fitness-account-routing.module';

@NgModule({
  imports: [SharedModule, FitnessAccountRoutingModule],
  declarations: [
    FitnessAccountComponent,
    FitnessAccountDetailComponent,
    FitnessAccountUpdateComponent,
    FitnessAccountDeleteDialogComponent,
  ],
  entryComponents: [FitnessAccountDeleteDialogComponent],
})
export class FitnessAccountModule {}
