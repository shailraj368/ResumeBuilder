import { Component } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css'],
})
export class ListCompanyComponent {
  list: any = [];
  imageAddress : any
  constructor(private service: CompanyService) {


  }

  ngOnInit(): void {
    this.service.companyList().subscribe({
      next: (res) => {
        this.list = res;
        console.log(this.list[0].logoPath, 'Image..........');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
