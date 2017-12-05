import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../../model/item';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html'
})
export class ItemAddComponent implements OnInit {

  item: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.item = new Item();
    this.item.color = '#FFFFFF';
  }

  onSubmit() {
    this.itemService.add(this.item).subscribe(
      response => console.log(response),
      error => alert('something went wrong')
    );
  }

  onFileChange(e) {
    console.log(e.srcElement.files);
  }
}
