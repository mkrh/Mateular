import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../../model/item';
import { Event } from '@angular/router/src/events';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html'
})
export class ItemAddComponent implements OnInit {
  private defaultColor = '#ffffff';
  private reader = new FileReader();
  item: Item;

  constructor(private itemService: ItemService) {
    this.reader.addEventListener('load', () => this.loadImage(), false);
   }

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

  private onFileChange(e) {
    const file = e.srcElement.files[0];
    if (file) {
      this.reader.readAsDataURL(file);
    }
  }

  private loadImage() {
    this.item.image_link = this.reader.result;
  }
}
