import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  hostStyle = {
    top: '90px',
    bottom: '35px'
  };
  data: any;

  constructor() {
    this.data = [
      {
        Name: 'Andorra',
        CountryRegionCode: 'AD',
        City: 'Bothell',
        AddressLine: '1970 Napa Ct.',
        PostalCode: 98011
      },
      {
        Name: 'United Arab Emirates',
        CountryRegionCode: 'AE',
        City: 'Bothell',
        AddressLine: '9833 Mt. Dias Blv.',
        PostalCode: 98011
      }
    ];
  }
  ngOnInit() {}
}
