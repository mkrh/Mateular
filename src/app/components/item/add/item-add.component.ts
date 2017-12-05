import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../../model/item';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html'
})
export class ItemAddComponent implements OnInit {
  private defaultColor = '#ffffff';
  item: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.item = new Item();
    this.item.color = this.defaultColor;
  }

  onSubmit(form: NgForm) {
    this.itemService.add(this.item).subscribe(
      response => {
        console.log(response);
        if (form) { form.resetForm({ color: this.defaultColor }); }
      },
      error => alert('something went wrong')
    );
  }

  onFileChange(e) {
    console.log(e.srcElement.files);
  }
}
