import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ItemSearchComponent } from "../item-search/item-search.component";
import { ItemsComponent } from "../items/items.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainPageComponent, ItemSearchComponent, ItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'docker-deployment';
  
}
