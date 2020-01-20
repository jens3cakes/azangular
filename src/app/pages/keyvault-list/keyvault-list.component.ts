import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-keyvault-list',
  templateUrl: './keyvault-list.component.html',
  styleUrls: ['./keyvault-list.component.scss']
})
export class KeyvaultListComponent implements OnInit {

  constructor(
    private router: Router,
    private backend: BackendService,
  ){ }
  

  title: string ='Disabled'
  keyvaultsList:Object[]=[]

  ngOnInit() {
    this.backend.keyVaultList()
    .then((resp:Object[]=[])=>{
      this.keyvaultsList = resp
      console.log(resp)
      return this.keyvaultsList
    })
  }





}
