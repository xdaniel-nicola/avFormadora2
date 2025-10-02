import { Routes } from '@angular/router';
import { WorkDetailsPage } from './work-details/work-details.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'api-page',
    loadComponent: () => import('./api-page/api-page.page').then( m => m.ApiPagePage)
  },
  {
    path: 'info-page',
    loadComponent: () => import('./info-page/info-page.page').then( m => m.InfoPagePage)
  },
  {
    path: 'work/:id',
    loadComponent: () => import('./work-details/work-details.page').then( m => m.WorkDetailsPage)
  },
];
