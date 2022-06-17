import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'sportsman',
        data: { pageTitle: 'donorunApp.sportsman.home.title' },
        loadChildren: () => import('./sportsman/sportsman.module').then(m => m.SportsmanModule),
      },
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
        path: 'transaction-group',
        data: { pageTitle: 'donorunApp.transactionGroup.home.title' },
        loadChildren: () => import('./transaction-group/transaction-group.module').then(m => m.TransactionGroupModule),
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
