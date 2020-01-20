import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';

@Component({
  templateUrl: './adGroupList.component.html',
  styleUrls: ['./adGroupList.component.scss']
})

export class AdGroupListComponent implements OnInit {


  ngOnInit() {
    this.backend.adGroupList()
      .then((resp: {"deletionTimestamp","description","dirSyncEnabled","displayName","lastDirSyncTime","mail","mailEnabled","mailNickname","objectId","objectType","odata.type","onPremisesDomainName","onPremisesNetBiosName","onPremisesSamAccountName","onPremisesSecurityIdentifier","provisioningErrors","proxyAddresses","securityEnabled"
      }[]) => {
        this.groups = resp
        return this.groups
      })
  }

  title: string = "Active Directory Group List"
  groups:{"deletionTimestamp","description","dirSyncEnabled","displayName","lastDirSyncTime","mail","mailEnabled","mailNickname","objectId","objectType","odata.type","onPremisesDomainName","onPremisesNetBiosName","onPremisesSamAccountName","onPremisesSecurityIdentifier","provisioningErrors","proxyAddresses","securityEnabled"}[]=[]
  group: {
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
  }={
  "deletionTimestamp": "",
  "description": "",
  "dirSyncEnabled": "",
  "displayName": "",
  "lastDirSyncTime": "",
  "mail": "",
  "mailEnabled": null,
  "mailNickname": "",
  "objectId": "",
  "objectType": "",
  "odata.type": "",
  "onPremisesDomainName": "",
  "onPremisesNetBiosName": "",
  "onPremisesSamAccountName": "",
  "onPremisesSecurityIdentifier": "",
  "provisioningErrors": [],
  "proxyAddresses": [],
  "securityEnabled": null
  }

  constructor(
    private router: Router,
    private backend: BackendService
  ) { }

}