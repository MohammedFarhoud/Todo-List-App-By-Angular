import { Injectable } from '@angular/core';
import {User} from '../../TodoInterface'
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  user: User = {
    name: '',
    favQuote: '',
    imgSrc: '',
    loggedTime: ''      
  };

  constructor() {}

  addUser(name: string, favQuote: string) {
    this.user.name = name;
    this.user.favQuote = favQuote;
    this.user.imgSrc = "../../assets/Mo.png";
    let date = new Date();
    date.setSeconds(0, 0);
    this.user.loggedTime = date.toISOString().replace(/:00.000Z/, "").replace('T', '  ')
  }
}