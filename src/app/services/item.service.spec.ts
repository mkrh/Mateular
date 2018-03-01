import { TestBed, inject } from '@angular/core/testing';

import { ItemService } from './item.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Item } from '../../model/item';
import { exec } from 'child_process';

describe('ItemService', () => {
  let itemService: ItemService;
  let httpClient;
  const items = [
    {
      title: 'Mate',
      price: 1.0,
      image_link: 'mate.jpg',
      number: 0
    },
    {
      title: 'Cola',
      price: 1.5,
      image_link: 'cola.jpg',
      number: 1
    }
  ];

  beforeEach(() => {
    httpClient = jasmine.createSpyObj('httpClient', ['get', 'post']);
    httpClient.get.and.returnValue(Observable.of(items));
    itemService = new ItemService(httpClient);
  });

  it('should be created', () => {
    expect(itemService).toBeTruthy();
  });

  it('should get all items', () => {
    let result;
    itemService.getAll().subscribe(
       response => result = response
    );
    expect(result).toEqual(items);
  });

  it('should add a new item', () => {
    const item: Item = {
      id: 0,
      title: 'Mate',
      price: 1.0,
      image: 'mate.jpg',
      color: '',
      number: 0
    };
    itemService.add(item);

    expect(httpClient.post).toHaveBeenCalledWith('/proxy/add/item', item);
  });
});
