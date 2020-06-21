import { Injectable } from '@angular/core';

import { SearchResult } from '../../../shared/models/searchResultModel';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of, Subject, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public searchResultSubj$: Subject<Array<SearchResult>> = new Subject();

  private API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  getByQuery(query: string): void {
    !query.length ? this.searchResultSubj$.next([]) : this.handleRequest(query);
  }

  handleRequest(query: string): void {
    this.http.get<{ items: any[] }>(`${this.API}?q=${query}`)
      .pipe(
        map(books => books.items || []),
        map(resp => resp.map(book => new SearchResult(book))),
        tap(resp => console.log(resp))
      )
      .subscribe(resp => this.searchResultSubj$.next(resp));
  }
}
