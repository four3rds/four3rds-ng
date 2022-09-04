import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../../classes/Response';
import { Link } from './Link';

const URL = 'assets/json/links.json';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  private links: Link[] = [];
  private linksPopulated = false;

  constructor(private client: HttpClient) {
    this.client.get<Response<Link>>(URL).subscribe({
      next: (v) => v.data.forEach((link) => this.links.push(link)),
      error: (e) => console.log('Unable to retrieve Links: ' + e),
      complete: () => {
        this.links.sort((a, b) => a.text.localeCompare(b.text));
        this.linksPopulated = true;
      },
    });
  }

  getLinks(typeId?: string): Observable<Link> {
    do {} while (!this.linksPopulated);
    return new Observable<Link>((observer) => {
      this.links.forEach((link) => {
        if (!typeId || link.typeId == typeId) observer.next(link);
      });
      observer.complete();
    });
  }
}
