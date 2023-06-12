import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit  {

  cityForm!: FormGroup;
  weatherData: any;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,

  ) {
  }


  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.cityForm=this.formbuilder.group({
      cityName:['']
    })
  }

  getCity() {
    let city = this.cityForm.value.cityName;
    this.getWeather(city);
  }

   getWeather(city: string) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=27bf119fc89835053d74d174c554dff0&units=metric`;
    this.http.get(url).subscribe(
      res => {
        console.log(res);
        this.weatherData = res;
      },
      err => {
        console.error(err);
      }
    );
  }


}
