import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from '../../services/backend.service';

@Component({
  templateUrl: './sqlServer.component.html',
  styleUrls: ['./sqlServer.component.scss']
})

export class SqlServerComponent implements OnInit {


  ngOnInit() {
    this.backend.showSqlServer(this.route.snapshot.paramMap.get('id'))
    .then((resp:any)=>{
      this.serverData = resp[0]
      return this.serverData
    })
  }

title: 'Sql Server Data'
serverData:any



  constructor(
    private backend: BackendService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

sqlDatabase(group,servename){
  this.router.navigate(['sqlDatabases', group,servename ])
}


}