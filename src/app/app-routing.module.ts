import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemOverviewComponent } from './components/item/overview/item-overview.component';
import { ItemAddComponent } from './components/item/add/item-add.component';
import { ItemListComponent } from './components/item/list/item-list.component';

const routes: Routes = [
  { path: '', component: ItemOverviewComponent },
  { path: 'addItem', component: ItemAddComponent },
  { path: 'itemList', component: ItemListComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
