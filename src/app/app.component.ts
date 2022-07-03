import { Component } from '@angular/core';
import { menuList } from './helpers/menuList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuList = menuList;
}
