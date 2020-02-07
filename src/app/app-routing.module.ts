import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : 'weather-info',
    component : WeatherInfoComponent
  },
  {
    path : '',
    redirectTo: 'weather-info',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
