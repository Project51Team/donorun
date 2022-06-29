import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ITransaction } from '../transaction.model';
import { TransactionService } from '../service/transaction.service';

@Component({
  templateUrl: './transaction-delete-dialog.component.html',
})
export class TransactionDeleteDialogComponent {
  transaction?: ITransaction;

  constructor(protected transactionService: TransactionService, protected activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.transactionService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
