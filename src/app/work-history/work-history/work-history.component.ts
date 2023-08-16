import { Component, OnInit } from '@angular/core';
import { WorkHistoryService } from '../service/work-history.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css'],
})
export class WorkHistoryComponent implements OnInit {
  list: any = [];
  constructor(public service: WorkHistoryService, public router: Router) {}
  ngOnInit(): void {
    this.service.refreshList().subscribe({
      next: (res) => {
        console.log(res,"Get All..........");
        this.list = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addwh() {
    this.router.navigate(['add']);
  }

  editwh(id: any) {
    this.router.navigate([`edit/${id}`]);
  }

  deleteWorkExp(id: any) {
    this.service.deleteWorkHistory(id).subscribe({
      next: (res) => {
        console.log(res);
        console.log('innnnnnnnnnnnnnnnnn');
        // this.service.refreshList();
      },
      error: (err) => {
        console.log(err);
      },
    });
    
    window.location.reload();
    this.router.navigate(['/list']);
  }
}
