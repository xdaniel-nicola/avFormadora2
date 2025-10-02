import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryService {
  private baseUrl = 'https://openlibrary.org';

  constructor(private http: HttpClient) {}

  searchBooks(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search.json?q=${query}`)
  }

  getCoverUrl(coverId: number, size: 'S' | 'M' | 'L' = 'M'): string {
    return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
  }

  getAuthor(authorKey: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/authors/${authorKey}.json`)
  }
  
  getWork(workKey: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/works/${workKey}.json`)
  }
  
}
