import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../../classes/Response';
import { Type } from './Type';

export const PARENT_TYPE_LINK = '1';
const URL = 'assets/json/types.json';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  constructor(private client: HttpClient) {}

  getTypes(parentId?: string): Observable<Type> {
    return new Observable<Type>((observer) =>
      this.client.get<Response<Type>>(URL).subscribe({
        next: (v) =>
          v.data
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach((type) => {
              if (!parentId || type.parentId == parentId) {
                observer.next(type);
              }
            }),
        error: (e) => console.log('Unable to retrieve Types: ' + e),
        complete: () => observer.complete(),
      })
    );
  }
}
