import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { SportsmanComponent } from './list/sportsman.component';
import { SportsmanDetailComponent } from './detail/sportsman-detail.component';
import { SportsmanUpdateComponent } from './update/sportsman-update.component';
import { SportsmanDeleteDialogComponent } from './delete/sportsman-delete-dialog.component';
import { SportsmanRoutingModule } from './route/sportsman-routing.module';

@NgModule({
  imports: [SharedModule, SportsmanRoutingModule],
  declarations: [SportsmanComponent, SportsmanDetailComponent, SportsmanUpdateComponent, SportsmanDeleteDialogComponent],
  entryComponents: [SportsmanDeleteDialogComponent],
})
export class SportsmanModule {}
