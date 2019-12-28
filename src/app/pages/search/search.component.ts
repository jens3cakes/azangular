import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from '../../services/backend.service';


@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  title: string = 'Resource Group'
  resourceGroups:[];

  resourceGroup: Object;

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
  ) { }

}


