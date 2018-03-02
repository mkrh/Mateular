import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../../model/item';

@Component({
  selector: 'app-item-list-component',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {

  items: Item[];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getAll().subscribe(items => this.items = items);
  }

  onDelete(id: number) {
    this.itemService.delete(id).subscribe(
      response => {
        document.getElementById(id.toString()).remove();
      }
    );
  }
}
