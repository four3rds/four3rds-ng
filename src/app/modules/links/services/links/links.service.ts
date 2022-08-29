import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { LocalStorageUtils } from 'src/app/core/utils/LocalStorageUtils';
import { KEY_LINKS } from 'src/app/shared/classes/Constants';
import { Link } from '../../classes/Link';

@Injectable({
  providedIn: 'root',
})
export class LinksService {
  private linksSubject: BehaviorSubject<Link[]> = new BehaviorSubject<Link[]>(
    []
  );

  create(entity: Link): Observable<string> {
    return new Observable<string>((observer) =>
      LocalStorageUtils.create(KEY_LINKS, entity).subscribe({
        next: (v) => observer.next(v),
        error: (e) => observer.error(e),
        complete: () => {
          this.updateLinksSubject(observer);
          observer.complete();
        },
      })
    );
  }

  delete(id?: string): Observable<boolean> {
    return new Observable<boolean>((observer) =>
      LocalStorageUtils.delete(KEY_LINKS, id).subscribe({
        next: (v) => observer.next(v),
        error: (e) => observer.error(e),
        complete: () => {
          this.updateLinksSubject(observer);
          observer.complete();
        },
      })
    );
  }

  getLinks(): BehaviorSubject<Link[]> {
    if (this.linksSubject.getValue().length == 0) {
      const links: Link[] = [];
      this.read().subscribe({
        next: (link) => links.push(link),
        error: (e) => this.linksSubject.error(e),
        complete: () => {
          this.linksSubject.next(links);
        },
      });
    }
    return this.linksSubject;
  }

  read(id?: string): Observable<Link> {
    return new Observable<Link>((observer) =>
      LocalStorageUtils.read(KEY_LINKS, id).subscribe({
        next: (v) => observer.next(v as Link),
        error: (e) => observer.error(e),
        complete: () => observer.complete(),
      })
    );
  }

  update(entity: Link): Observable<boolean> {
    return new Observable<boolean>((observer) =>
      LocalStorageUtils.update(KEY_LINKS, entity).subscribe({
        next: (v) => observer.next(v),
        error: (e) => observer.error(e),
        complete: () => {
          this.updateLinksSubject(observer);
          observer.complete();
        },
      })
    );
  }

  updateLinksSubject(observer: Observer<any>) {
    let links: Link[] = [];
    this.read().subscribe({
      next: (v) => links.push(v),
      error: (e) => observer.error(e),
      complete: () => {
        this.linksSubject.next(links);
      },
    });
  }
}
