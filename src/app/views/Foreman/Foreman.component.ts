import { Component, OnInit } from '@angular/core';
import {Http, Response } from '@angular/http';

@Component({
  templateUrl: 'Foreman.component.html',
  styleUrls: ['Foreman.component.css']
  
})
export class ForemanComponent implements OnInit {
  products = [];
  private apiURL = 'https://dev.snbchain.com/snbchain-core/api/public/foreman-companies/get-mini-details';

  p: number = 1;
  constructor(private http: Http) {}

  getData(){
    return this.http.get(this.apiURL)
      .subscribe((res:Response) => {
        this.products = res.json();
        // console.log(this.products);
      });
    };

  ngOnInit(){
    this.getData();
  }
}