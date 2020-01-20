import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.service"


@Component({
  templateUrl: './listAccounts.component.html',
  styleUrls: ['./listAccounts.component.scss']
})

export class ListAccountsComponent implements OnInit {
  accounts: Object[]
  account: Object

  constructor(
    private backend: BackendService
  ) {

  }
  ngOnInit() {
    this.backend.listAllAccounts()
      .then((resp: any) => {
        this.accounts = resp
        return this.accounts
      })
  }


}