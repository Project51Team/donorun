import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISportsman } from '../sportsman.model';

@Component({
  selector: 'jhi-sportsman-detail',
  templateUrl: './sportsman-detail.component.html',
})
export class SportsmanDetailComponent implements OnInit {
  sportsman: ISportsman | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ sportsman }) => {
      this.sportsman = sportsman;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
