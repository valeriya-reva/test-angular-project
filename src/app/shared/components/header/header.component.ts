import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  MENU_ITEMS = [
    {
      route: './home',
      name: 'Home'
    },
    {
      route: './filter',
      name: 'Filter'
    },
    {
      route: './settings',
      name: 'Settings'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
