import { Entity } from '../../../core/classes/Entity';

export class Link extends Entity {
  constructor(
    id: string,
    public category: string,
    public text: string,
    public url: string
  ) {
    super(id);
  }
}
