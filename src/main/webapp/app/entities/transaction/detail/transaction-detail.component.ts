import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITransaction } from '../transaction.model';

@Component({
  selector: 'jhi-transaction-detail',
  templateUrl: './transaction-detail.component.html',
})
export class TransactionDetailComponent implements OnInit {
  transaction: ITransaction | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ transaction }) => {
      this.transaction = transaction;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
