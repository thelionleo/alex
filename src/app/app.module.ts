import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { WeatherComponent } from './components/weather/weather.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactUsComponent,
    CalculatorComponent,
    WeatherComponent,
    JokesComponent,
    TutorialsComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // This is for template-driven forms. You may or may not need this
    ReactiveFormsModule, // This is for reactive forms, which you're using
    HttpClientModule // Include it in the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
