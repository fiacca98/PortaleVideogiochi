import { Component } from '@angular/core';
import { MenuService } from './Menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentSection="home";

  constructor(private menuService: MenuService){
    this.menuService.sectionSelected$.subscribe(id=>{
      this.currentSection = id;
    });
  }
}
