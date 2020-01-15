import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.service"
import { SessionService } from "../../services/session.service"
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  title = 'CloudHI Azurite';
  accounts: Object[]
  allResourceGroups: Object[]

  constructor(
    private backend: BackendService,
    private router: Router,
    private session: SessionService
  ) {
    this.isLoggedIn = this.session.getLogStatus()
    console.log(this.isLoggedIn)

  }
  isLoggedIn: boolean;

  ngOnInit() {
    this.isLoggedIn = this.session.getLogStatus()
    console.log(this.isLoggedIn)
    console.log('header onInit fired')

  }


  login() {
    console.log('header ts')
    return this.backend.login()
      .then(() => {
        console.log('return from backend')
      })
      .then(() => {
        return this.router.navigate(['home'])
      })
      .then(()=>{
        location.reload()
      })
  };

  accountList() {
        this.router.navigate(['listAcc'])
  };

  allResourceGroupsList(){
      this.router.navigate(['all_groups'])
  }

  viewAllVms(){
    this.router.navigate(['allVms'])
  }

  vnetList(){
    this.router.navigate(['all_vnets'])
  }

  seeWebApps(){
    this.router.navigate(['webApps'])
  }

  adAppListAll(){
    this.router.navigate(['allAdAppList'])
  }

  adGroupList(){
    this.router.navigate(['adGroupList'])
  }

  logout() {
    console.log('logout')
    return this.backend.logout()
      .then(() => {
        return this.router.navigate([''])
      });
  };

}
