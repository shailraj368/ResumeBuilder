import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkHistoryComponent } from './work-history/work-history/work-history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth-guard.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'WorkHistory/list', pathMatch: 'full' },
  {
    path: 'WorkHistory',
    loadChildren: () =>
      import('./work-history/work-history.module').then(
        (m) => m.WorkHistoryModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'Company',
    loadChildren: () =>
      import('./company/company.module').then((m) => m.CompanyModule),
  },
  {
    path: 'Auth',
    loadChildren: () =>
      import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
