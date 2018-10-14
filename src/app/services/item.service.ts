import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../model/item';
import { Observable } from 'rxjs';


@Injectable()
export class ItemService {

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Item[]> {
    return this.httpClient.get<Item[]>('/proxy/api/get/items');
  }

  public add(newItem: Item) {
    return this.httpClient.post('/proxy/api/add/item', newItem);
  }

  save(item: Item): any {
    return this.httpClient.put(`/proxy/api/update/item`, item);
  }

  public delete(id: number) {
    return this.httpClient.delete(`/proxy/api/delete/item/${id}/`);
  }
}
