import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  ngOnInit() {
    this.backend.userRoleAssignment()
      .then((Response) => {
         return this.user.id = Response[0].id.slice(15, 51), this.user.name = Response[0].name, this.user.principalId = Response[0].principalId, this.user.principalName = Response[0].principalName, this.user.principalType = Response[0].principalType, this.user.roleDefinitionId = Response[0].roleDefinitionId, this.user.roleDefinitionName = Response[0].roleDefinitionName, this.user.scope = Response[0].scope, this.user.type = Response[0].type
      })
  };

  title: string = 'Welcome to CloudHI Azurite';

  user: {
    'id': string,
    'name': string,
    'principalId': string,
    'principalName': string,
    'principalType': string,
    'roleDefinitionId': string,
    'roleDefinitionName': string,
    'scope': string,
    'type': string,
  }
    = {
      'id': "",
      'name': "",
      'principalId': "",
      'principalName': "",
      'principalType': "",
      'roleDefinitionId': "",
      'roleDefinitionName': "",
      'scope': "",
      'type': ""
    }

  constructor(
    private backend: BackendService,
    private router: Router
  ) { }







}