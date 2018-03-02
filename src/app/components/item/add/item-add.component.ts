import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../../model/item';

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
        alert('item succesfully added');
        if (form) { form.resetForm({ color: this.defaultColor }); }
      },
      error => alert('something went wrong')
    );
  }

  public onFileChange(e) {
    if (e.target && e.target.files.length > 0) {
      const file = e.target.files[0];
        this.reader.readAsDataURL(file);
    }
  }

  public loadImage() {
    this.item.image = this.reader.result;
  }
}
