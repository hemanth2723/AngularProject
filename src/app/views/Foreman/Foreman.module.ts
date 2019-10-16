// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ForemanComponent } from './Foreman.component';
import { ForemanRoutingModule } from './Foreman-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ForemanRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  declarations: [ ForemanComponent ]
})

export class ForemanModule { }
