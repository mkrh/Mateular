import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../../model/item';

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html'
})
export class ItemOverviewComponent implements OnInit {

  items: Item[];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getAll().subscribe(items => this.items = [
      {
        title: 'Mate',
        price: 1.0,
        image_link: '/proxy/static/images/club_mate_05.png',
        number: 0
      },
      {
        title: 'Cola',
        price: 1.5,
        image_link: '/proxy/static/images/mexican-coca-cola-800x800.png',
        number: 1
      }
    ] as Item[]);
  }

}
