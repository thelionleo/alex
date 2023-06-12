import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent {
  jokeText: string = '';
constructor(private http: HttpClient){
  
}





getJoke(): Observable<any> {
  return this.http.get('https://v2.jokeapi.dev/joke/Any');
}

jokes() {
  this.getJoke().subscribe((data) => {
    if (data.type === 'single') {
      this.jokeText = data.joke;
    } else {
      this.jokeText = data.setup + ' ' + data.delivery;
    }
  });
}


}
