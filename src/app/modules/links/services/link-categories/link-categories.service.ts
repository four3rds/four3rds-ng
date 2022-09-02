import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageUtils } from 'src/app/core/utils/LocalStorageUtils';
import { KEY_LINK_CATEGORIES } from 'src/app/shared/classes/Constants';
import { LinkCategory } from '../../classes/LinkCategory';

@Injectable({
  providedIn: 'root',
})
export class LinkCategoriesService {
  private linkCategoriesSubject: BehaviorSubject<LinkCategory[]> =
    new BehaviorSubject<LinkCategory[]>([]);

  create(entity: LinkCategory): Observable<string> {
    return LocalStorageUtils.create(KEY_LINK_CATEGORIES, entity);
  }

  delete(id?: string): Observable<boolean> {
    return LocalStorageUtils.delete(KEY_LINK_CATEGORIES, id);
  }

  getLinkCategories(): BehaviorSubject<LinkCategory[]> {
    if (this.linkCategoriesSubject.getValue().length == 0) {
      const LinkCategories: LinkCategory[] = [];
      this.read().subscribe({
        next: (LinkCagegory) => LinkCategories.push(LinkCagegory),
        error: (e) => this.linkCategoriesSubject.error(e),
        complete: () => {
          this.linkCategoriesSubject.next(LinkCategories);
        },
      });
    }
    return this.linkCategoriesSubject;
  }

  read(id?: string): Observable<LinkCategory> {
    return new Observable<LinkCategory>((observer) =>
      LocalStorageUtils.read(KEY_LINK_CATEGORIES, id).subscribe({
        next: (v) => observer.next(v as LinkCategory),
        error: (e) => observer.error(e),
        complete: () => observer.complete(),
      })
    );
  }

  update(entity: LinkCategory): Observable<boolean> {
    return LocalStorageUtils.update(KEY_LINK_CATEGORIES, entity);
  }
}
