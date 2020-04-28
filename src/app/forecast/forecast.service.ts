import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private WeekForecast: IWeatherForecast[] = [
    {
        "date": "2020-04-29",
        "temperatureC": 15,
        "temperatureF": 58,
        "summary": "Sweltering"
    },
    {
        "date": "2020-04-30",
        "temperatureC": 19,
        "temperatureF": 66,
        "summary": "Cool"
    },
    {
        "date": "2020-05-01",
        "temperatureC": 25,
        "temperatureF": 76,
        "summary": "Mild"
    },
    {
        "date": "2020-05-02",
        "temperatureC": 0,
        "temperatureF": 32,
        "summary": "Balmy"
    },
    {
        "date": "2020-05-03",
        "temperatureC": 30,
        "temperatureF": 85,
        "summary": "Bracing"
    },
    {
        "date": "2020-05-04",
        "temperatureC": -2,
        "temperatureF": 29,
        "summary": "Bracing"
    },
    {
        "date": "2020-05-05",
        "temperatureC": 34,
        "temperatureF": 93,
        "summary": "Bracing"
    }
]
  constructor(private _http: HttpClient) {
   }

   public getDayForecast():IWeatherForecast{     
    return this.WeekForecast[0];
   }
   public getWeekForecast():IWeatherForecast[]{     
    return this.WeekForecast;
   }
}


export interface IWeatherForecast
{  
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

