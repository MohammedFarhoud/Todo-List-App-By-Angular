import { Component } from '@angular/core';
import * as Bowser from "bowser";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  browserObject = Bowser.getParser(window.navigator.userAgent);
  browser: string =  this.browserObject.getBrowserName();
  operatingSystem: string =  this.browserObject.getOSName();
  batteryLevel: number = 0;
  constructor() {
    (navigator as any).getBattery().then((battery: any) => {
      this.batteryLevel = battery.level * 100
    })
  }
}
