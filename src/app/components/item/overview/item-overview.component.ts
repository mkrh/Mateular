import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../../model/item';

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html'
})
export class ItemOverviewComponent implements OnInit {

  items: Item[];
  selectedItems = new Map<number, CartItem>();

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getAll().subscribe(items => this.items = items);
  }

  onItemClick(e: Item) {
    if (!this.selectedItems.has(e.id)) {
      this.selectedItems.set(e.id, { item: e, count: 1 });
    } else {
      this.selectedItems.get(e.id).count++;
    }
  }
}

class CartItem {
  item: Item;
  count: number;
}
