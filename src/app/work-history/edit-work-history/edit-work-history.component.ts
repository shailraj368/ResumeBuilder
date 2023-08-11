import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkHistoryService } from '../service/work-history.service';

@Component({
  selector: 'app-edit-work-history',
  templateUrl: './edit-work-history.component.html',
  styleUrls: ['./edit-work-history.component.css'],
})
export class EditWorkHistoryComponent implements OnInit {
  WorkHistoryDetails: any = {
    id: '',
    companyName: '',
    endDate: '',
    jobCity: '',
    jobCountry: '',
    jobTitle: '',
    projectDescription: '',
    projectName: '',
    startDate: '',
    techStack: '',
  };

  constructor(
    private service: WorkHistoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.service.getWorkHistory(id).subscribe({
            next: (res) => {
              console.log(res, 'update....');
              this.WorkHistoryDetails = res;
            },
            error: (err) => {
              console.log(err);
            },
          });
        }
      },
    });
  }

  updateWorkExp() {
    console.log(this.WorkHistoryDetails);
    this.service
      .updateWorkHistory(this.WorkHistoryDetails.id, this.WorkHistoryDetails)
      .subscribe({
        next: (res) => {
          console.log(res);
          // this.service.refreshList();
        },
        error: (err) => {
          console.log(err);
        },
      });
    this.router.navigate(['list']);
  }

  deleteWorkExp(id: any) {
    this.service.deleteWorkHistory(this.WorkHistoryDetails.id).subscribe({
      next: (res) => {
        console.log(res);
        console.log('innnnnnnnnnnnnnnnnn');
        // this.service.refreshList();
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.router.navigate(['list']);
  }
}
