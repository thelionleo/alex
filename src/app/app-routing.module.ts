import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { WeatherComponent } from './components/weather/weather.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { AboutMeComponent } from './components/about-me/about-me.component';


const routes: Routes = [
{
  path:'',component:MainComponent, pathMatch:'full'
},
{
  path: 'contact-us',component:ContactUsComponent, pathMatch:'full'
},
{
  path: 'calculator',component:CalculatorComponent, pathMatch:'full'
},

{
  path: 'weather',component:WeatherComponent, pathMatch:'full'
},

{
  path: 'jokes',component:JokesComponent, pathMatch:'full'
},

{
  path: 'tutorials',component:TutorialsComponent, pathMatch:'full'
},

{
  path: 'about-me',component:AboutMeComponent, pathMatch:'full'
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


