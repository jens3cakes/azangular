import{ Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})

export class BackendService {
  baseUrl: string = "http://localhost:4200";
  
constructor(
  private http: HttpClient){

  }

login(){
  console.log('backend')
  const loginUrl = this.baseUrl + '/api/login'
  console.log(loginUrl)

  return this.http.get(loginUrl)
    .toPromise()
}

getGroups(){
  console.log('backend2')
  const groupUrl = this.baseUrl + '/api/groups/name'
  return this.http.get(groupUrl)
  .toPromise()
}



}