import { Routes } from '@angular/router';
import { courtDepositRoutes } from './modules/court-deposits/court-deposits.routes';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./modules/homepage/homepage.component').then((m) => m.HomepageComponent) },
  {
    path: 'court-payment',
    loadComponent: () => import('./modules/court-payment/court-payment.component').then((m) => m.CourtPaymentComponent),
    loadChildren: () => import('./modules/court-payment/court-payment.routes').then((m) => m.courtPaymentRoutes),
  },
  {
    path: 'court-deposits',
    loadComponent: () =>
      import('./modules/court-deposits/court-deposits.component').then((m) => m.CourtDepositsComponent),
    loadChildren: () => import('./modules/court-deposits/court-deposits.routes').then((m) => m.courtDepositRoutes),
  },
];
