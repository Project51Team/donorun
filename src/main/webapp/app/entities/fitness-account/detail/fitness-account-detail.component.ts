import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IFitnessAccount } from '../fitness-account.model';

@Component({
  selector: 'jhi-fitness-account-detail',
  templateUrl: './fitness-account-detail.component.html',
})
export class FitnessAccountDetailComponent implements OnInit {
  fitnessAccount: IFitnessAccount | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ fitnessAccount }) => {
      this.fitnessAccount = fitnessAccount;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
