import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ICompany } from '../company.model';
import { CompanyService } from '../service/company.service';

@Component({
  templateUrl: './company-delete-dialog.component.html',
})
export class CompanyDeleteDialogComponent {
  company?: ICompany;

  constructor(protected companyService: CompanyService, protected activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.companyService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
