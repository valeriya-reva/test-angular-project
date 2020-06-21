import { Component, OnInit } from '@angular/core';

import { SearchService } from '../core/services/search/search.service';
import {SearchResult} from '../shared/models/searchResultModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchResult: Array<SearchResult>;

  constructor(
    private searchService: SearchService,
  ) {
    this.searchService.searchResultSubj$.asObservable().subscribe(result => {
      this.searchResult = result;
    });
  }

  ngOnInit() {
  }
}
