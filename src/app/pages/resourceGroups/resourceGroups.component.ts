import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
import { BackendService } from '../../services/backend.service';


@Component({
  templateUrl: './resourceGroups.component.html',
  styleUrls: ['./resourceGroups.component.scss']
})

export class ResourceGroupsComponent implements OnInit {
  title: string = 'Resource Group'
  resourceGroups:[];

  resourceGroup: Object;

  groupSubId:string="";

  ngOnInit() {

    // let groupsName = this.routes.snapshot.paramMap.get('name');
    // console.log(groupsName)
    console.log('search')
    this.backend.getGroups()
      .then((resp: any) => {
        this.resourceGroups = resp
        return this.resourceGroups
      })
    console.log(this.resourceGroups)
     
  }
  constructor(
    private backend: BackendService,
    private router: Router,
    private routes: ActivatedRoute
  ){
    // const getNav = routes.paramMap.subscribe((params:ParamMap)=>{
    //   this.groupSubId = params.get('subId')
    //   console.log(getNav)
    //})
  }
}

