import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  public flag: any;
  public pointFlag: any;
  constructor() {
    this.flag=true;
    this.pointFlag=false;
   }

  ngOnInit() {
  }
  autoMsg(){
    this.flag=!this.flag;
  }
  noMsg() {
    this.pointFlag = !this.pointFlag;
    this.flag = false;
  }

}
