import { Component } from '@angular/core';
import { MatomatService } from './services/matomat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mateular';
  constructor(private matomatService: MatomatService) {
  }

  public login() {
    this.matomatService.post('login', null);
  }
}
