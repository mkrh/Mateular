import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemService } from './services/item.service';
import { ItemOverviewComponent } from './components/item/overview/item-overview.component';
import { ItemAddComponent } from './components/item/add/item-add.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemOverviewComponent,
    ItemAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
