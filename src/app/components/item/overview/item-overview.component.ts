import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../../model/item';

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html'
})
export class ItemOverviewComponent implements OnInit {

  items: Item[];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getAll().subscribe(items => this.items = items);
  }
}
