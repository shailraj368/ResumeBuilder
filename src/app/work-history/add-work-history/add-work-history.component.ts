import { Component } from '@angular/core';
import { WorkHistoryService } from '../service/work-history.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-work-history',
  templateUrl: './add-work-history.component.html',
  styleUrls: ['./add-work-history.component.css'],
})
export class AddWorkHistoryComponent {
  addWorkHistoryRequest: any = {
    // id: '',
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

  constructor(private service: WorkHistoryService, private router: Router) {}

  ngOnInt(): void {
    // this.service.refreshList();
  }

  addWorkExp() {
    this.service.saveWorkHistory(this.addWorkHistoryRequest).subscribe({
      next: (res) => {
        // this.service.refreshList();
        // window.location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });

    console.log(this.addWorkHistoryRequest, 'Add.....');
    this.router.navigate(['/list']);
  }

  BackToList() {
    this.router.navigate(['/list']);
  }
}

// companyName: 'Tridhya';
// endDate: '2022-08-01T00:00:00';
// id: 1;
// jobCity: 'Ahmedabad';
// jobCountry: 'India';
// jobTitle: 'Full Stack';
// projectDescription: 'project managment system';
// projectName: 'PMS';
// startDate: '2023-01-01T00:00:00';
// techStack: 'Java Script';
