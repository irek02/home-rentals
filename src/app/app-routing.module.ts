import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomesComponent } from './homes/homes.component';
import { PostHomeComponent } from './post-home/post-home.component';


const routes: Routes = [
  {
    path: 'homes',
    component: HomesComponent
  },
  {
    path: 'post-home',
    component: PostHomeComponent
  },
  {
    path: '',
    redirectTo: 'homes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
