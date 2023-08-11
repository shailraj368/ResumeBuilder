import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkHistoryComponent } from './work-history/work-history/work-history.component';

const routes: Routes = [
  // { path: '', redirectTo: 'WorkHistory/list', pathMatch: 'full' },
  {
    path: 'WorkHistory',
    loadChildren: () =>
      import('./work-history/work-history.module').then(
        (m) => m.WorkHistoryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
