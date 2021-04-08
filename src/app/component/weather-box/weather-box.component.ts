import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent implements OnInit {
@Input() weatherList: string[];
  constructor() { }

  ngOnInit(): void {
  }

  

}
