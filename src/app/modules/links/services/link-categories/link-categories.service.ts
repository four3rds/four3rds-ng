import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageUtils } from 'src/app/core/services/LocalStorageUtils';
import { LinkCategory } from '../../classes/LinkCategory';

const KEY = 'linkCategories';

@Injectable({
  providedIn: 'root',
})
export class LinkCategoriesService {
  create(entity: LinkCategory): Observable<string> {
    return LocalStorageUtils.create(KEY, entity);
  }

  delete(id?: string): Observable<boolean> {
    return LocalStorageUtils.delete(KEY, id);
  }

  read(id?: string): Observable<LinkCategory> {
    return new Observable<LinkCategory>((observer) =>
      LocalStorageUtils.read(KEY, id).subscribe({
        next: (v) => observer.next(v as unknown as LinkCategory),
        error: (e) => observer.error(e),
        complete: () => observer.complete(),
      })
    );
  }

  update(entity: LinkCategory): Observable<boolean> {
    return LocalStorageUtils.update(KEY, entity);
  }
}
