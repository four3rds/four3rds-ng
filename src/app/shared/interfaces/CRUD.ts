import { Entity } from '../../core/classes/Entity';

export interface CRUD {
  create(entity: Entity): string;
  delete(id: string): boolean;
  read(id: string): Entity;
  update(entity: Entity): boolean;
}
