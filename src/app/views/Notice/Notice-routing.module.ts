import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticeComponent } from './Notice.component';


const routes: Routes = [
 {
  path: '',
  component: NoticeComponent,
  data: {
    title: 'Notice'
  }
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeRoutingModule {}
