import { Component, OnInit, Input } from '@angular/core';
import { IWeatherForecast } from 'src/app/services/forecast/forecast.service';

@Component({
  selector: 'app-one-day',
  templateUrl: './one-day.component.html',
  styleUrls: ['./one-day.component.css']
})
export class OneDayComponent implements OnInit {

  @Input()
  public f:IWeatherForecast;
  constructor() { }

  ngOnInit(): void {
  }
  public getColor(f: IWeatherForecast):string {
    if(f?.temperatureC<0)
      return "cold";
    else if (f?.temperatureC<25)
      return "warm";
    else return "hot";
  }
}
