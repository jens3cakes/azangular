import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  isLoggedIn: boolean;

  constructor() {
    let logStatus = localStorage.getItem('isLoggedIn')
  }

  setSession() {
    localStorage.setItem('isLoggedIn', 'true')
    return this.isLoggedIn = true
  }

  getLogStatus() {
    let booLog = localStorage.getItem('isLoggedIn')
    if (booLog == 'true') {
      this.isLoggedIn = true
      return this.isLoggedIn
    }
    else {
      return this.isLoggedIn = false
    };
  };

  logoutClearSession() {
    localStorage.clear();
    return this.isLoggedIn = false
  }

}