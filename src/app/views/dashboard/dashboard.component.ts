import { Component, OnInit } from '@angular/core';
import {Http, Response } from '@angular/http';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  products = [];
  items = [];
  private apiURL = 'https://dev.snbchain.com/snbchain-core/api/public/foreman-companies/get-mini-details';
  
  private apiURL2 = 'https://dev.snbchain.com/snbchain-workflow/api/public/chit-release-notices';

  constructor(private http: Http) { }

  getData(){
    return this.http.get(this.apiURL)
      .subscribe((res:Response) => {
        this.products = res.json();
      });
    };

    getDataitem(){
      return this.http.get(this.apiURL2)
        .subscribe((res:Response) => {
          this.items = res.json();
        });
      };

  ngOnInit(){
    this.getData();
    this.getDataitem();
  }

}