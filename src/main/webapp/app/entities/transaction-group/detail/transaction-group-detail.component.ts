import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITransactionGroup } from '../transaction-group.model';

@Component({
  selector: 'jhi-transaction-group-detail',
  templateUrl: './transaction-group-detail.component.html',
})
export class TransactionGroupDetailComponent implements OnInit {
  transactionGroup: ITransactionGroup | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ transactionGroup }) => {
      this.transactionGroup = transactionGroup;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
