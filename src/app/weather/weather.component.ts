import { Component, OnInit } from '@angular/core';
import { ForecastService, IWeatherForecast } from '../forecast/forecast.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public DayForecast:IWeatherForecast;
  constructor(private _wfServise:ForecastService) { }

  ngOnInit(): void {
    this.DayForecast = this._wfServise.getDayForecast();
  }

}

