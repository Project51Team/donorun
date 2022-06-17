import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { TransactionGroupComponent } from './list/transaction-group.component';
import { TransactionGroupDetailComponent } from './detail/transaction-group-detail.component';
import { TransactionGroupUpdateComponent } from './update/transaction-group-update.component';
import { TransactionGroupDeleteDialogComponent } from './delete/transaction-group-delete-dialog.component';
import { TransactionGroupRoutingModule } from './route/transaction-group-routing.module';

@NgModule({
  imports: [SharedModule, TransactionGroupRoutingModule],
  declarations: [
    TransactionGroupComponent,
    TransactionGroupDetailComponent,
    TransactionGroupUpdateComponent,
    TransactionGroupDeleteDialogComponent,
  ],
  entryComponents: [TransactionGroupDeleteDialogComponent],
})
export class TransactionGroupModule {}
