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
    return this.isLoggedIn
  }

  logoutClearSession() {
    return this.isLoggedIn = false
    localStorage.clear();
  }

}