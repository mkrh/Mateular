import { Component } from '@angular/core';
import { ItemService } from './services/item.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Item } from '../model/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private items: Item[];

  title = 'Mateular';

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.itemService.getAll().subscribe(items => this.items = [
      {
        title: 'Mate',
        price: 1.0,
        image_link: 'mate.jpg',
        number: 0
      },
      {
        title: 'Cola',
        price: 1.5,
        image_link: 'cola.jpg',
        number: 1
      }
    ] as Item[]);
  }
}
