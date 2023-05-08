import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BlueJay';
  toggleSidebar = true;
  toggleBarEmitted(value:boolean){
    this.toggleSidebar = value;
  }
}
