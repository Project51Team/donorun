import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { IFitnessAccount } from '../fitness-account.model';
import { FitnessAccountService } from '../service/fitness-account.service';

@Component({
  templateUrl: './fitness-account-delete-dialog.component.html',
})
export class FitnessAccountDeleteDialogComponent {
  fitnessAccount?: IFitnessAccount;

  constructor(protected fitnessAccountService: FitnessAccountService, protected activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.fitnessAccountService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
