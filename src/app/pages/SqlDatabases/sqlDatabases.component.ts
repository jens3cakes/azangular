import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { BackendService } from "../../services/backend.service";

@Component ({
  templateUrl: './sqlDatabases.component.html',
  styleUrls: ['./sqlDatabases.component.scss']
})

export class SqlDatabasesComponent implements OnInit{

  ngOnInit(){
    this.backend.showDbList(this.route.snapshot.paramMap.get('group'),this.route.snapshot.paramMap.get('servename'))
    .then((resp:any)=>{
      this.databases = resp
      return this.databases
    })
  }

  databases:[{
      catalogCollation:string,
      createMode: string,
      creationDate: string,
      currentServiceObjectiveName:string,
      databaseId: string,
      defaultSecondaryLocation: string,
      edition: string,
      elasticPoolId: string,
      elasticPoolName: string,
      failoverGroupId: string,
      id: string,
      kind: string,
      licenseType: string,
      location: string,
      longTermRetentionBackupResourceId: string,
      managedBy: string,
      name: string,
      readReplicaCount: number,
      readScale: string,
      recoverableDatabaseId: string,
      recovereryServicesRecovereryPointId: string,
      resourceGroup: string,
      restorableDroppedDatabaseId: string,
      tags: string,
      status: string,
      type: string
    
  }]
  database:{
    objectiveName:string,
    databaseId: string,
    defaultSecLocation: string,
    edition: string,
    elasticPoolId: string,
    elasticPoolName: string,
    failoverGroupId: string,
    subId: string,
    kindOfSys: string,
    licenseType: string,
    location: string,
    longTermRetBackUpResourceId: string,
    managedBy: string,
    nameOfDb: string,
    readRepCount: number,
    readScale: string,
    recoverDatabaseId: string,
    recoverServRecoverPointId: string,
    resourceGroup: string,
    restDropDataId: string,
    status: string,
    type: string
  }

  constructor(
    private backend: BackendService,
    private router: Router,
    private route: ActivatedRoute
  ){

  }
}