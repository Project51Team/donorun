import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { IMoneyRecipient } from '../money-recipient.model';
import { MoneyRecipientService } from '../service/money-recipient.service';

@Component({
  templateUrl: './money-recipient-delete-dialog.component.html',
})
export class MoneyRecipientDeleteDialogComponent {
  moneyRecipient?: IMoneyRecipient;

  constructor(protected moneyRecipientService: MoneyRecipientService, protected activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.moneyRecipientService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
