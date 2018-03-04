import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../../model/item';

@Component({
  selector: 'app-item-list-component',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {

  items: Item[];
  selectedItem: Item;

  constructor(private itemService: ItemService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.itemService.getAll().subscribe(items => this.items = items);
  }

  onDelete(id: number) {
    this.itemService.delete(id).subscribe(
      response => {
        document.getElementById(`item-${id.toString()}`).remove();
        this.snackBar.open(`Item ${id} deleted`, null, {
          duration: 3000
        });
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
        this.snackBar.open(`Item ${item.id} updated`, null, {
          duration: 3000
        });
    }, err => {
      this.selectedItem = null;
    });
  }
}
