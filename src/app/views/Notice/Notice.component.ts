import { Component, OnInit } from '@angular/core';
import {Http, Response } from '@angular/http';

@Component({
  templateUrl: 'Notice.component.html'
})
export class NoticeComponent implements OnInit {
  Items = [];
  private apiURL = 'https://dev.snbchain.com/snbchain-workflow/api/public/chit-release-notices';

  constructor(private http: Http) { }

  getData(){
    return this.http.get(this.apiURL)
      .subscribe((res:Response) => {
        this.Items = res.json();
        // console.log(this.Items);
      });
    };

  ngOnInit(){
    this.getData();
  }

}