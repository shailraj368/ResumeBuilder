import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkHistoryRoutingModule } from './work-history-routing.module';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { AddWorkHistoryComponent } from './add-work-history/add-work-history.component';
import { FormsModule } from '@angular/forms';
import { EditWorkHistoryComponent } from './edit-work-history/edit-work-history.component';


@NgModule({
  declarations: [
    WorkHistoryComponent,
    AddWorkHistoryComponent,
    EditWorkHistoryComponent,
  ],
  imports: [
    CommonModule,
    WorkHistoryRoutingModule,
    FormsModule
  ],
  exports:[
    WorkHistoryComponent,
    AddWorkHistoryComponent
  ]
})
export class WorkHistoryModule { }
