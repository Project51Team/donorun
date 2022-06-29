import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ISetting } from '../setting.model';
import { SettingService } from '../service/setting.service';

@Component({
  templateUrl: './setting-delete-dialog.component.html',
})
export class SettingDeleteDialogComponent {
  setting?: ISetting;

  constructor(protected settingService: SettingService, protected activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.settingService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
