import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.service"
import printJS from 'print-js';


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
    console.log('list onint fired', this.backend.listAllAccounts())
    this.backend.listAllAccounts()
      .then((resp: any) => {
        this.accounts = resp
        return this.accounts
      })
  }

  // printReport() {
  //   printJS({
  //     printable: 'accountlist.txt',
  //     properties: [
  //       { field: 'cloudName', displayName: 'Cloud Service Provider' },
  //       { field: 'id', displayName: 'Subscription Id' },
  //       { field: 'isDefault', displayName: 'Default Account' },
  //       { field: 'name', displayName: 'Name of Account' },
  //       { field: 'state', displayName: 'Status of Account' },
  //       { field: 'tenantId', displayName: 'Tenant Id' },
  //       { field: 'user.name', displayName: 'User' },
  //       { field: 'user.type', displayName: 'Type of User' }
  //     ]
  // })
  // }

}