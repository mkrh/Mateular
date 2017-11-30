import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { ItemOverviewComponent } from './item-overview.component';
import { ItemService } from '../../../services/item.service';

describe('ItemOverviewComponent', () => {
  let component: ItemOverviewComponent;
  let itemService;
  const items = [{id: 1}];

  beforeEach(() => {
    itemService = jasmine.createSpyObj('itemService', ['getAll']);
    itemService.getAll.and.returnValue(Observable.of(items));
    component = new ItemOverviewComponent(itemService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all items on init', () => {
    component.ngOnInit();
    expect(itemService.getAll).toHaveBeenCalled();
    // expect(component.items).toEqual(this.items);
  });
});
