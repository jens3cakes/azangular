import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service'

@Injectable({
  providedIn: 'root'

})

export class BackendService {
  baseUrl: string = "http://localhost:4200";

  constructor(
    private http: HttpClient,
    private session: SessionService) {
  };

  login() {
    console.log('backend')
    const loginUrl = this.baseUrl + '/api/login'
    console.log(loginUrl)
    return this.http.get(loginUrl)
      .toPromise()
      .then(() => {
        return this.session.setSession()
      })

  };

  getGroups() {
    console.log('backend2')
    const groupUrl = this.baseUrl + '/api/azure/name'
    return this.http.get(groupUrl)
      .toPromise()
  };

  listAllAccounts() {
    console.log('backend3')
    const listAllAccountsUrl = this.baseUrl + '/api/azure/accounts'
    return this.http.get(listAllAccountsUrl)
      .toPromise()
  };

  showAccountNameId() {
    console.log('backend4')
    const showAccountNameIdUrl = this.baseUrl + '/api/azure/account'
    return this.http.get(showAccountNameIdUrl)
      .toPromise()
  };

  listAccIdNames() {
    console.log('backend5')
    const listAccIdNamesUrl = this.baseUrl + '/api/azure/subId'
    return this.http.get(listAccIdNamesUrl)
      .toPromise()
  };

  groupList(subId) {
    console.log('backend6', subId)
    const groupListUrl = this.baseUrl + `/api/azure/grouplist/${subId}`
    return this.http.get(groupListUrl, subId)
      .toPromise()
  };


}