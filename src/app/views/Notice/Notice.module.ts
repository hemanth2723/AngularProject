// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, enableProdMode } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
// Notices Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NoticeComponent } from './Notice.component';

// Components Routing
import { NoticeRoutingModule } from './Notice-routing.module';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NoticeRoutingModule,
    TabsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  declarations: [ NoticeComponent ]
})

export class NoticeModule { }
