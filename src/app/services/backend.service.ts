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
    const loginUrl = this.baseUrl + '/api/login'
    return this.http.get(loginUrl)
      .toPromise()
      .then(() => {
        return this.session.setSession()
      })
  };

  getGroups() {
    const groupsUrl = this.baseUrl + '/api/azure/groups'
    return this.http.get(groupsUrl)
      .toPromise()
  };

  listAllAccounts() {
    const listAllAccountsUrl = this.baseUrl + '/api/azure/accounts'
    return this.http.get(listAllAccountsUrl)
      .toPromise()
  };

  webAppInfo() {
    const webAppInfoUrl = this.baseUrl + '/api/azure/webApp'
    return this.http.get(webAppInfoUrl)
      .toPromise()
  }

  showAccountNameId() {
    const showAccountNameIdUrl = this.baseUrl + '/api/azure/account'
    return this.http.get(showAccountNameIdUrl)
      .toPromise()
  };

  listAccIdNames() {
    const listAccIdNamesUrl = this.baseUrl + '/api/azure/subId'
    return this.http.get(listAccIdNamesUrl)
      .toPromise()
  };

  groupList(subId) {
    const groupListUrl = this.baseUrl + `/api/azure/grouplist/${subId}`
    return this.http.get(groupListUrl, subId)
      .toPromise()
  };

  userRoleAssignment() {
    const userRoleAssignmentUrl = this.baseUrl + '/api/azure/user'
    return this.http.get(userRoleAssignmentUrl)
      .toPromise()
  };

  showSqlServer(id) {
    const showSqlServerUrl = this.baseUrl + `/api/azure/sql/${id}`
    return this.http.get(showSqlServerUrl, id)
      .toPromise()
  }

  showDbList(group, servename) {
    const showDbListUrl = this.baseUrl + `/api/azure/sqlDb/${group}/${servename}`
    return this.http.get(showDbListUrl, { params: { group: group, servename: servename } })
      .toPromise()
  }

  showVmList() {
    const showVmListUrl = this.baseUrl + `/api/azure/allVms`
    return this.http.get(showVmListUrl)
      .toPromise()
  }

  showVnetList() {
    const showVnetListUrl = this.baseUrl + `/api/azure/all_vnets`
    return this.http.get(showVnetListUrl)
      .toPromise()
  }

  adAppListAll() {
    const adAppListAllUrl = this.baseUrl + `/api/azure/adAppListAll`
    return this.http.get(adAppListAllUrl)
      .toPromise()
  }

  adGroupList() {
    const adGroupListUrl = this.baseUrl + `/api/azure/adGroupList`
    return this.http.get(adGroupListUrl)
      .toPromise()
  };

  keyVaultList(){
    const keyvaultListUrl = this.baseUrl + `/api/azure/keyvaultList`
    return this.http.get(keyvaultListUrl)
    .toPromise()
  };

  logout() {
    const logoutUrl = this.baseUrl + '/api/logout'
    return this.http.get(logoutUrl)
      .toPromise()
      .then((Response) => {
        this.session.logoutClearSession()
      })

  };



}