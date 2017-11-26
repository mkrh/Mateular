import { Component } from '@angular/core';
import { ItemService } from './services/item.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Item } from '../model/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'Mateular';

  constructor() {
  }

  ngOnInit(): void {
  }
}
