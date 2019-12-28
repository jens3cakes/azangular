import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  ngOnInit(){
    console.log('home onint fired');
  };

  title: string = 'Welcome to Cohort3 Azure Pentest';

  constructor(
    private backend: BackendService,
    private router: Router
  ){}

  login(){
    console.log('home ts')
    return this.backend.login()
    .then(()=> {
      console.log('return from backend')
    })
    .then(() => {
      return this.router.navigate(['search'])
    })
  }




  
}