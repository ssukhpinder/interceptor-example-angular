import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interceptor-example-angular';
  constructor(private http: HttpClient) {

  }

  CallGet() {
    this.http.get("http://localhost:64120/get/test", { responseType: 'text' }).subscribe(
      data => {
        debugger
      }
    );
  }
}
