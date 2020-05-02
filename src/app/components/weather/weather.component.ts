import { Component, OnInit } from '@angular/core';
import { ForecastService, IWeatherForecast } from '../../services/forecast/forecast.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public DayForecast:IWeatherForecast;
  public WeekForecast:IWeatherForecast[];
  public IsWeek:boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private _wfServise:ForecastService, private route:Router) { 
    this.IsWeek= activatedRoute.snapshot.params['week']=="week";
  }

  ngOnInit(): void {
    this._wfServise.getDayForecast().subscribe(res=> {this.DayForecast=res;});
    this._wfServise.getWeekForecast().subscribe(res=> {this.WeekForecast=res;});
  }
  ChangeForecast(isWeek:boolean){
    //this.IsWeek=isWeek;
    this.route.navigate([isWeek?'week':''], {relativeTo: this.activatedRoute});
  }
}

