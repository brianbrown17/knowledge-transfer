import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  constructor(private http: HttpClient) { }

  getMarkdown(url: string): Observable<string> {
    console.log('url', url);
    var output =  this.http.get(url, { responseType: 'text' });
    console.log('output', output);
    return output
  }
}