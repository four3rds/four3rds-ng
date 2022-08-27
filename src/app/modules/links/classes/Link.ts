import { Entity } from '../../../core/classes/Entity';

export class Link extends Entity {
  constructor(
    id: string,
    private categoryId: string,
    private text: string,
    private url: string
  ) {
    super(id);
  }

  getCategoryId(): string {
    return this.categoryId;
  }

  getText(): string {
    return this.text;
  }

  getUrl(): string {
    return this.url;
  }

  setCategoryId(categoryId: string): Link {
    this.categoryId = categoryId;
    return this;
  }

  setText(text: string): Link {
    this.text = text;
    return this;
  }

  setUrl(url: string): Link {
    this.url = url;
    return this;
  }
}
