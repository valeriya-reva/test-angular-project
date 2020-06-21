import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output() onChangedSearchResult = new EventEmitter<Array<any>>();

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

  onChanged(response) {
    this.onChangedSearchResult.emit(response);
  }

  ngOnInit() {
  }

}
