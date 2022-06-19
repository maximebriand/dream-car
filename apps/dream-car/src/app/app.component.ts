import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message} from '@dream-car/api-interfaces';

@Component({
  selector: 'dc-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');

  constructor(private http: HttpClient) {
  }
}
