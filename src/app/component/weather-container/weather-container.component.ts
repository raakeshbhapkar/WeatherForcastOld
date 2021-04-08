import { Component, OnInit } from '@angular/core';
import {WeatherServicesService} from '../../services/weather-services.service'
@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss']
})
export class WeatherContainerComponent implements OnInit {
  public weather = {};
  public isWeather = false;
  constructor(
    private weatherServicesService: WeatherServicesService) { }

  ngOnInit(): void {
    this.getWeather();
   
  }

  private getWeather() {
    this.weatherServicesService.showWeather().subscribe((data: any[])=>{
      this.weather = data;
      this.isWeather = true;
      console.log(this.weather)
     
    });
  }

 

  

  
  

}
