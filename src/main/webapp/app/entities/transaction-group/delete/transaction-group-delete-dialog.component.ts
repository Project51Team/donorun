import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ITransactionGroup } from '../transaction-group.model';
import { TransactionGroupService } from '../service/transaction-group.service';

@Component({
  templateUrl: './transaction-group-delete-dialog.component.html',
})
export class TransactionGroupDeleteDialogComponent {
  transactionGroup?: ITransactionGroup;

  constructor(protected transactionGroupService: TransactionGroupService, protected activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.transactionGroupService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
