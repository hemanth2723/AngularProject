import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForemanComponent } from './Foreman.component';

const routes: Routes = [
  {
    path: '',
    component: ForemanComponent,
    data: {
      title: 'Foreman'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForemanRoutingModule {}
