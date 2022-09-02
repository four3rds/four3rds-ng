import { Entity } from '../../../core/classes/Entity';

export class LinkCategory extends Entity {
  constructor(id: string, private category: string) {
    super(id);
  }

  getCategory(): string {
    return this.category;
  }

  setCategory(category: string): LinkCategory {
    this.category = category;
    return this;
  }
}
