import { ItemListComponent } from './item-list.component';

describe('ItemListComponentComponent', () => {
  let component: ItemListComponent;

  beforeEach(() => {
    component = new ItemListComponent(null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
