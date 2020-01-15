import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';

@Component({
  templateUrl: './adGroupList.component.html',
  styleUrls: ['./adGroupList.component.scss']
})

export class AdGroupListComponent implements OnInit {


  ngOnInit() {
    console.log('onInit fired')
    this.backend.adGroupList()
      .then((resp: {
        "deletionTimestamp": string,
        "description": string,
        "dirSyncEnabled": string,
        "displayName": string,
        "lastDirSyncTime": string,
        "mail": string,
        "mailEnabled": boolean,
        "mailNickname": string,
        "objectId": string,
        "objectType": string,
        "odata.type": string,
        "onPremisesDomainName": string,
        "onPremisesNetBiosName": string,
        "onPremisesSamAccountName": string,
        "onPremisesSecurityIdentifier": string,
        "provisioningErrors": [],
        "proxyAddresses": [],
        "securityEnabled": boolean
      }[]) => {
        this.groups = resp
        return this.groups
      })
  }

  title: string = "Active Directory Group List"
  groups: {
    "deletionTimestamp": string,
    "description": string,
    "dirSyncEnabled": string,
    "displayName": string,
    "lastDirSyncTime": string,
    "mail": string,
    "mailEnabled": boolean,
    "mailNickname": string,
    "objectId": string,
    "objectType": string,
    "odata.type": string,
    "onPremisesDomainName": string,
    "onPremisesNetBiosName": string,
    "onPremisesSamAccountName": string,
    "onPremisesSecurityIdentifier": string,
    "provisioningErrors": [],
    "proxyAddresses": [],
    "securityEnabled": boolean
  }[]

  constructor(
    private router: Router,
    private backend: BackendService
  ) { }

}