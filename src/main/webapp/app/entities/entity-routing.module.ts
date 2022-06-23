import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'company',
        data: { pageTitle: 'donorunApp.company.home.title' },
        loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
      },
      {
        path: 'activity',
        data: { pageTitle: 'donorunApp.activity.home.title' },
        loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule),
      },
      {
        path: 'transaction',
        data: { pageTitle: 'donorunApp.transaction.home.title' },
        loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule),
      },
      {
        path: 'money-recipient',
        data: { pageTitle: 'donorunApp.moneyRecipient.home.title' },
        loadChildren: () => import('./money-recipient/money-recipient.module').then(m => m.MoneyRecipientModule),
      },
      {
        path: 'setting',
        data: { pageTitle: 'donorunApp.setting.home.title' },
        loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
