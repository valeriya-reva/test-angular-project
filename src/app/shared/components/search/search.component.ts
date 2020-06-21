import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from '../../../core/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  searchForm = new FormGroup({
    search: new FormControl(''),
  });

  constructor(
    private searchService: SearchService,
  ) {}

  search(query: string): void {
    this.searchService.getByQuery(query);
  }

  ngOnInit() {
  }

}
