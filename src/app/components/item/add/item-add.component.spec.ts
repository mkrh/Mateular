import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAddComponent } from './item-add.component';

describe('ItemAddComponent', () => {
  let component: ItemAddComponent;

  beforeEach(() => {
    component = new ItemAddComponent(null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
