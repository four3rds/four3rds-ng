import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageUtils } from 'src/app/core/services/LocalStorageUtils';
import { Link } from '../../classes/Link';

const KEY = 'links';

@Injectable({
  providedIn: 'root',
})
export class LinksService {
  create(entity: Link): Observable<string> {
    return LocalStorageUtils.create(KEY, entity);
  }

  delete(id?: string): Observable<boolean> {
    return LocalStorageUtils.delete(KEY, id);
  }

  read(id?: string): Observable<Link> {
    return new Observable<Link>((observer) =>
      LocalStorageUtils.read(KEY, id).subscribe({
        next: (v) => observer.next(v as Link),
        error: (e) => observer.error(e),
        complete: () => observer.complete(),
      })
    );
  }

  update(entity: Link): Observable<boolean> {
    return LocalStorageUtils.update(KEY, entity);
  }
}
