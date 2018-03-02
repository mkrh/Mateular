import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../model/item';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Item[]> {
    return this.httpClient.get<Item[]>('/proxy/get/items');
  }

  public add(newItem: Item) {
    return this.httpClient.post('/proxy/add/item', newItem);
  }

  public delete(id: number) {
    return this.httpClient.delete(`/proxy/delete/item/${id}/`);
  }
}
