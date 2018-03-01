import { Observable } from 'rxjs/Observable';

import { ItemOverviewComponent } from './item-overview.component';
import { ItemService } from '../../../services/item.service';
import { fakeAsync, tick } from '@angular/core/testing';
import { Item } from '../../../../model/item';

describe('ItemOverviewComponent', () => {
  let component: ItemOverviewComponent;
  let itemService;
  const items: Item[] = [{
    id: 1,
    title: 'testItem',
    price: 2.4,
    color: '#ffdeff',
    image: 'link',
    number: 10
  }];

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
    expect(component.items).toEqual(items);
  });
});
