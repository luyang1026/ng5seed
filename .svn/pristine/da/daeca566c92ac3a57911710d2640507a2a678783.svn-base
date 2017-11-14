import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class Globals {
  public readonly version: string = '1.0.0';
  public readonly locale: string = 'zh-CN';
  public currencyFormat = { style: 'currency', currency: 'USD' };
  public dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };

  // 请求web服务端口号
  public readonly apiPort: string = '4200';
  // 请求协议
  public readonly apiProtocol: string;
  // 请求的Host名称
  public readonly apiHostName: string;
  // 请求的服务api路径
  public readonly baseApiPath: string;

  constructor() {
    if (this.apiProtocol === undefined) {
      this.apiProtocol = window.location.protocol;
    }
    if (this.apiHostName === undefined) {
      this.apiHostName = window.location.hostname;
    }
    if (this.apiPort === undefined) {
      this.apiPort = window.location.port;
    }
    if (
      this.apiHostName.includes('yunzhangfang.com') ||
      this.apiHostName.includes('91daizhang.com')
    ) {
      this.baseApiPath = this.apiProtocol + '//' + this.apiHostName + '/';
    } else {
      this.baseApiPath =
        this.apiProtocol + '//' + this.apiHostName + ':' + this.apiPort + '/';
    }
    if (this.locale === undefined) {
      this.locale = navigator.language;
    }
  }
}
