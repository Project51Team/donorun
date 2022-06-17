import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { MoneyRecipientComponent } from './list/money-recipient.component';
import { MoneyRecipientDetailComponent } from './detail/money-recipient-detail.component';
import { MoneyRecipientUpdateComponent } from './update/money-recipient-update.component';
import { MoneyRecipientDeleteDialogComponent } from './delete/money-recipient-delete-dialog.component';
import { MoneyRecipientRoutingModule } from './route/money-recipient-routing.module';

@NgModule({
  imports: [SharedModule, MoneyRecipientRoutingModule],
  declarations: [
    MoneyRecipientComponent,
    MoneyRecipientDetailComponent,
    MoneyRecipientUpdateComponent,
    MoneyRecipientDeleteDialogComponent,
  ],
  entryComponents: [MoneyRecipientDeleteDialogComponent],
})
export class MoneyRecipientModule {}
