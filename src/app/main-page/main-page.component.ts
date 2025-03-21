import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-main-page',
  imports: [
    MatSlideToggleModule, MatCardModule, MatButtonModule
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MainPageComponent {

}
