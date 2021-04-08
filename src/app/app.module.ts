import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WeatherServicesService} from './services/weather-services.service'
import { HeaderComponent } from './component/header/header.component';
import { WeatherBoxComponent } from './component/weather-box/weather-box.component';
import { WeatherContainerComponent } from './component/weather-container/weather-container.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherBoxComponent,
    WeatherContainerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,    
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
