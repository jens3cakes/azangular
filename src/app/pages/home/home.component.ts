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
      .then((Response: Object) => {
        return this.users = Response
        //  return this.users.id = Response[0].id.slice(15, 51), this.users.name = Response[0].name, this.users.principalId = Response[0].principalId, this.users.principalName = Response[0].principalName, this.users.principalType = Response[0].principalType, this.users.roleDefinitionId = Response[0].roleDefinitionId, this.users.roleDefinitionName = Response[0].roleDefinitionName, this.users.scope = Response[0].scope, this.users.type = Response[0].type
      })
  };

  title: string = 'Welcome to CloudHI Azurite';
  users: Object
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
      'id': "".slice(15,51),
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