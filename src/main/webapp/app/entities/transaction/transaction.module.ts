import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { TransactionComponent } from './list/transaction.component';
import { TransactionDetailComponent } from './detail/transaction-detail.component';
import { TransactionUpdateComponent } from './update/transaction-update.component';
import { TransactionDeleteDialogComponent } from './delete/transaction-delete-dialog.component';
import { TransactionRoutingModule } from './route/transaction-routing.module';

@NgModule({
  imports: [SharedModule, TransactionRoutingModule],
  declarations: [TransactionComponent, TransactionDetailComponent, TransactionUpdateComponent, TransactionDeleteDialogComponent],
  entryComponents: [TransactionDeleteDialogComponent],
})
export class TransactionModule {}
