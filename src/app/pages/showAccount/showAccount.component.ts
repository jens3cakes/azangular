import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"
import { BackendService } from "../../services/backend.service";

@Component({
  templateUrl: './showAccount.component.html',
  styleUrls: ['./showAccount.component.scss']
})

export class ShowAccountComponent implements OnInit{
  account:{
    environmentName:string,
    id:string,
    isDefault:string,
    name:string,
    state: string,
    tenantId: string,
    user: {
      name:string,
      type:string
    }

  }

  title:string='shit show'

  
  ngOnInit(){
    this.backend.showAccountNameId()
    .then((resp:any)=>{
      this.account = resp
      return this.account
    }
    )
  }

  constructor(
    private backend: BackendService,
    private router: Router
  ){

  }

getGList(){
  console.log(this.account.id)
  this.backend.groupList(this.account.id)
}

}