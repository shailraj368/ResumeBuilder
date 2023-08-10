import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkHistoryRoutingModule } from './work-history-routing.module';
import { WorkHistoryComponent } from './work-history/work-history.component';


@NgModule({
  declarations: [
    WorkHistoryComponent,
  ],
  imports: [
    CommonModule,
    WorkHistoryRoutingModule
  ],
  exports:[
    WorkHistoryComponent
  ]
})
export class WorkHistoryModule { }
