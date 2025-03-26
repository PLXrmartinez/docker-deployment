import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ItemsComponent } from '../items/items.component';
import { ItemSearchComponent } from '../item-search/item-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppComponent,
    HttpClientModule,
  ],
  declarations: [
  ],
  bootstrap: []
})
export class AppModule { }
