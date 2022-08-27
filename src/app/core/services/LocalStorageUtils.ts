import { Observable } from 'rxjs';
import { Entity } from '../classes/Entity';

declare global {
  interface Crypto {
    randomUUID: () => string;
  }
}

export class LocalStorageUtils {
  private static readLocalStorage(key: string): Entity[] {
    if (!key || key.trim().length == 0) return [];
    const json = localStorage.getItem(key.trim());
    return json != null ? JSON.parse(json) : [];
  }

  private static updateLocalStorage(key: string, entities: Entity[]): boolean {
    if (!key || key.trim().length == 0 || !entities) return false;
    entities.length > 0
      ? localStorage.setItem(key.trim(), JSON.stringify(entities))
      : localStorage.removeItem(key.trim());
    return true;
  }

  static create(key: string, entity: Entity): Observable<string> {
    return new Observable<string>((observer) => {
      if (key && key.trim().length > 0 && entity) {
        entity.setId(crypto.randomUUID());
        const entities = LocalStorageUtils.readLocalStorage(key.trim());
        entities.push(entity);
        LocalStorageUtils.updateLocalStorage(key.trim(), entities);
        observer.next(entity.getId());
      }
      observer.complete();
    });
  }

  static delete(key: string, id?: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      if (key && key.trim().length > 0) {
        let deleted = !id;
        let remainingEntities: Entity[] = [];
        if (id) {
          let entities = LocalStorageUtils.readLocalStorage(key.trim());
          entities.forEach((entity) => {
            if (entity.getId() != id) {
              remainingEntities.push(entity);
            } else {
              deleted = true;
            }
          });
        }
        if (deleted) {
          LocalStorageUtils.updateLocalStorage(key.trim(), remainingEntities);
        }
        observer.next(deleted);
      } else {
        observer.next(false);
      }
      observer.complete();
    });
  }

  static read(key: string, id?: string): Observable<Entity> {
    return new Observable<Entity>((observer) => {
      if (key && key.trim().length > 0) {
        let entities = LocalStorageUtils.read(key.trim());
        entities.forEach((entity) => {
          if (!id || entity.getId() == id) observer.next(entity);
        });
      }
      observer.complete();
    });
  }

  static update(key: string, entity: Entity): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      if (key && key.trim().length > 0 && entity && entity.getId()) {
        let updated = false;
        let remainingEntities: Entity[] = [];
        let originalEntities = LocalStorageUtils.read(key.trim());
        let updatedEntities: Entity[] = [];
        originalEntities.forEach((originalEntity) => {
          updatedEntities.push(
            originalEntity.getId() != entity.getId() ? originalEntity : entity
          );
          updated = updated || originalEntity.getId() == entity.getId();
        });
        if (updated) {
          LocalStorageUtils.updateLocalStorage(key.trim(), remainingEntities);
        }
        observer.next(updated);
      } else {
        observer.next(false);
      }
      observer.complete();
    });
  }
}
