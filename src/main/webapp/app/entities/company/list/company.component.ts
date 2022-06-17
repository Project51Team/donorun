import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ICompany } from '../company.model';
import { CompanyService } from '../service/company.service';
import { CompanyDeleteDialogComponent } from '../delete/company-delete-dialog.component';

@Component({
  selector: 'jhi-company',
  templateUrl: './company.component.html',
})
export class CompanyComponent implements OnInit {
  companies?: ICompany[];
  isLoading = false;

  constructor(protected companyService: CompanyService, protected modalService: NgbModal) {}

  loadAll(): void {
    this.isLoading = true;

    this.companyService.query().subscribe({
      next: (res: HttpResponse<ICompany[]>) => {
        this.isLoading = false;
        this.companies = res.body ?? [];
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  ngOnInit(): void {
    this.loadAll();
  }

  trackId(_index: number, item: ICompany): string {
    return item.id!;
  }

  delete(company: ICompany): void {
    const modalRef = this.modalService.open(CompanyDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.company = company;
    // unsubscribe not needed because closed completes on modal close
    modalRef.closed.subscribe(reason => {
      if (reason === 'deleted') {
        this.loadAll();
      }
    });
  }
}
