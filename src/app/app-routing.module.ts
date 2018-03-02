import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemOverviewComponent } from './components/item/overview/item-overview.component';
import { ItemAddComponent } from './components/item/add/item-add.component';
import { ItemListComponent } from './components/item/list/item-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: ItemOverviewComponent },
  { path: 'add-item', component: ItemAddComponent },
  { path: 'item-list', component: ItemListComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
