import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../../model/item';

@Component({
  selector: 'app-item-list-component',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {

  items: Item[];
  selectedItem: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getAll().subscribe(items => this.items = items);
  }

  onDelete(id: number) {
    this.itemService.delete(id).subscribe(
      response => {
        document.getElementById(`item-${id.toString()}`).remove();
      }
    );
  }

  onEdit(item: Item) {
    this.selectedItem = item;
  }

  onSave(item: Item) {
    this.itemService.save(item).subscribe(
      item => {
        this.selectedItem = null;
        console.log(item);
    }, err => {
      this.selectedItem = null;
    });
  }
}
