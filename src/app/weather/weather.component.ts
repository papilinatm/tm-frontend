import { Component, OnInit } from '@angular/core';
import { ForecastService, IWeatherForecast } from '../forecast/forecast.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public DayForecast:IWeatherForecast;
  public WeekForecast:IWeatherForecast[];
  public IsWeek:boolean = false;

  constructor(private _wfServise:ForecastService) { }

  ngOnInit(): void {
    this._wfServise.getDayForecast().subscribe(res=> {this.DayForecast=res;});

    this._wfServise.getWeekForecast().subscribe(res=> {this.WeekForecast=res;});

  }

  public getColor(f: IWeatherForecast):string {
    if(f.temperatureC<0)
      return "cold";
    else if (f.temperatureC<25)
      return "warm";
    else return "hot";
  }

}

