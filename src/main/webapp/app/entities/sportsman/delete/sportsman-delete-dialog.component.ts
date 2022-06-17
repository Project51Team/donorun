import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ISportsman } from '../sportsman.model';
import { SportsmanService } from '../service/sportsman.service';

@Component({
  templateUrl: './sportsman-delete-dialog.component.html',
})
export class SportsmanDeleteDialogComponent {
  sportsman?: ISportsman;

  constructor(protected sportsmanService: SportsmanService, protected activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.sportsmanService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
