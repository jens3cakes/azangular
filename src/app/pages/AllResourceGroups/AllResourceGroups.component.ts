import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BackendService } from '../../services/backend.service';


@Component({
  templateUrl: './AllResourceGroups.component.html',
  styleUrls: ['./AllResourceGroups.component.scss']
})

export class AllResourceGroupsComponent implements OnInit {
  title: string = 'All Resource Groups'
  allResourceGroups: any;

  allResourceGroup: Object;

  groupSubId: string = "";

  sqlData: any;

  ngOnInit() {
    return this.backend.getGroups()
    .then((resp:any)=>{
      console.log(Object.keys(resp).length)
      this.allResourceGroups = resp
      return this.allResourceGroups
    })
  }
  constructor(
    private backend: BackendService,
    private router: Router,
    private routes: ActivatedRoute
  ) {
  }

  showSqlServer(id){
    // this.backend.showSqlServer(id)
    // .then((resp:any)=>{
    //   console.log(resp)
    //   this.sqlData = resp
    // })
      this.router.navigate(['sqlServer', id])
  }
}

