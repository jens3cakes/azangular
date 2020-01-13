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

  isLoggedIn: boolean;

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
    const groupsUrl = this.baseUrl + '/api/azure/groups'
    return this.http.get(groupsUrl)
      .toPromise()
  };

  listAllAccounts() {
    console.log('backend3')
    const listAllAccountsUrl = this.baseUrl + '/api/azure/accounts'
    return this.http.get(listAllAccountsUrl)
      .toPromise()
  };

  webAppInfo(){
    console.log('backendWebApp')
    const webAppInfoUrl = this.baseUrl + '/api/azure/webApp'
    return this.http.get(webAppInfoUrl)
    .toPromise()
  }

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

  userRoleAssignment() {
    console.log('backend7')
    const userRoleAssignmentUrl = this.baseUrl + '/api/azure/user'
    return this.http.get(userRoleAssignmentUrl)
      .toPromise()
  };

  showSqlServer(id) {
    console.log('backend8', id)
    const showSqlServerUrl = this.baseUrl + `/api/azure/sql/${id}`
    return this.http.get(showSqlServerUrl, id)
      .toPromise()
  }

  showDbList(group,servename){
    console.log('backend9', group, servename)
    const showDbListUrl = this.baseUrl + `/api/azure/sqlDb/${group}/${servename}`
    return this.http.get(showDbListUrl,{params:{group:group, servename:servename}})
    .toPromise()
  }

  showVmList(){
    console.log('backend11')
    const showVmListUrl = this.baseUrl + `/api/azure/allVms`
    return this.http.get(showVmListUrl)
    .toPromise()
  }

  showVnetList(){
    console.log('backend12')
    const showVnetListUrl = this.baseUrl + `/api/azure/all_vnets`
    return this.http.get(showVnetListUrl)
    .toPromise()
  }

  adAppListAll(){
    console.log('backend azAppListAll')
    const adAppListAllUrl = this.baseUrl + `/api/azure/adAppListAll`
    return this.http.get(adAppListAllUrl)
    .toPromise()
  }

  logout() {
    console.log('backend10')
    const logoutUrl = this.baseUrl + '/api/logout'
    return this.http.get(logoutUrl)
      .toPromise()
      .then((Response) => {
        console.log(Response)
        this.session.logoutClearSession()
      })

  };



}