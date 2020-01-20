import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router"
import { BackendService } from "../../services/backend.service";

@Component({
  templateUrl: './showAccount.component.html',
  styleUrls: ['./showAccount.component.scss']
})

export class ShowAccountComponent implements OnInit {
  account: {
    environmentName: string,
    id: string,
    isDefault: string,
    name: string,
    state: string,
    tenantId: string,
    user: {
      name: string,
      type: string
    }
  }={
    environmentName:"",
    id:"",
    isDefault:"",
    name:"",
    state:"",
    tenantId:"",
    user: {
      name:"",
      type:""
    }
  }

  groups: any
  group: {}

  nosy: boolean = false

  title: string = 'Account'


  ngOnInit() {
    this.backend.showAccountNameId()
      .then((resp: any) => {
        this.account = resp
        return this.account
      }
      )
  }

  constructor(
    private backend: BackendService,
    private router: Router,
  ) {

  }

  getGList() {
      return this.router.navigate(['/groups', this.account.id])
    
  }

  getUList(){
    return this.router.navigate(['/user', this.account.tenantId] )
  }
}