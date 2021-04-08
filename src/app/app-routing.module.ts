import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherContainerComponent } from "./component/weather-container/weather-container.component";
const routes: Routes = [
  { path: 'home', component: WeatherContainerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: WeatherContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
