import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { AddWorkHistoryComponent } from './add-work-history/add-work-history.component';
import { EditWorkHistoryComponent } from './edit-work-history/edit-work-history.component';

const routes: Routes = [
  {
    path:"list",
    component : WorkHistoryComponent
  },
  {
    path:"add",
    component : AddWorkHistoryComponent
  },
  {
    path:"edit/:id",
    component : EditWorkHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkHistoryRoutingModule { }
