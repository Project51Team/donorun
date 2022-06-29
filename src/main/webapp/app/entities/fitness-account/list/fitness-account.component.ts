import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IFitnessAccount } from '../fitness-account.model';
import { FitnessAccountService } from '../service/fitness-account.service';
import { FitnessAccountDeleteDialogComponent } from '../delete/fitness-account-delete-dialog.component';

@Component({
  selector: 'jhi-fitness-account',
  templateUrl: './fitness-account.component.html',
})
export class FitnessAccountComponent implements OnInit {
  fitnessAccounts?: IFitnessAccount[];
  isLoading = false;

  constructor(protected fitnessAccountService: FitnessAccountService, protected modalService: NgbModal) {}

  loadAll(): void {
    this.isLoading = true;

    this.fitnessAccountService.query().subscribe({
      next: (res: HttpResponse<IFitnessAccount[]>) => {
        this.isLoading = false;
        this.fitnessAccounts = res.body ?? [];
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  ngOnInit(): void {
    this.loadAll();
  }

  trackId(_index: number, item: IFitnessAccount): number {
    return item.id!;
  }

  delete(fitnessAccount: IFitnessAccount): void {
    const modalRef = this.modalService.open(FitnessAccountDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.fitnessAccount = fitnessAccount;
    // unsubscribe not needed because closed completes on modal close
    modalRef.closed.subscribe(reason => {
      if (reason === 'deleted') {
        this.loadAll();
      }
    });
  }
}
