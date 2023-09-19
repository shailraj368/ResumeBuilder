import { Component } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css'],
})
export class ListCompanyComponent {
  list: any = [];
  imageAddress: any;
  logoURL: any = '';
  img: any = '';
  constructor(private service: CompanyService) {}

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

  viewFile(id: any) {
    this.service.getCompany(id).subscribe({
      next: (res: any) => {
        console.log(res);
        const logoPath = res.logoPath;
        if (logoPath) {
          alert("Hello! Image Open");
          // console.log(logoPath,"innnnnnnnnnnnnnn")
          // window.open(logoPath);
          // window.open(encodeURIComponent(logoPath), '_blank');
        } else {
          console.error('Logo path is null or empty.');
        }
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
