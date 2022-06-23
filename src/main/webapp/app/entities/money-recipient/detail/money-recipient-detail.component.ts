import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMoneyRecipient } from '../money-recipient.model';

@Component({
  selector: 'jhi-money-recipient-detail',
  templateUrl: './money-recipient-detail.component.html',
})
export class MoneyRecipientDetailComponent implements OnInit {
  moneyRecipient: IMoneyRecipient | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ moneyRecipient }) => {
      this.moneyRecipient = moneyRecipient;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
