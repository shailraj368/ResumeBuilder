import { Component, OnInit } from '@angular/core';
import { WorkHistoryService } from '../service/work-history.service';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css'],
})
export class WorkHistoryComponent implements OnInit {
  list: any = [];
  constructor(public service: WorkHistoryService) {}
  ngOnInit(): void {
    // this.list = this.service.refreshList();
    this.service.refreshList().subscribe({
      next : res => {
        console.log(res)
        this.list = res
      },
      error: err => {console.log(err)}
    });
  }
}
