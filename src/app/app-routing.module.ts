import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomesComponent } from './homes/homes.component';
import { BookingComponent } from './booking/booking.component';


const routes: Routes = [
  {
    path: 'homes',
    component: HomesComponent
  },
  {
    path: 'booking/:id',
    component: BookingComponent
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
