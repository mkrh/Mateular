import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemOverviewComponent } from './components/item/overview/item-overview.component';
import { ItemAddComponent } from './components/item/add/item-add.component';
import { ItemListComponent } from './components/item/list/item-list.component';
import { LoginComponent } from './components/login/login.component';

import { ItemService } from './services/item.service';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemOverviewComponent,
    ItemAddComponent,
    ItemListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ItemService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
