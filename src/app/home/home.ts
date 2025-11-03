import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarDesktop } from './components/navbar-desktop/navbar-desktop';

@Component({
  selector: 'home',
  imports: [
    NavbarDesktop
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class Home {

}
