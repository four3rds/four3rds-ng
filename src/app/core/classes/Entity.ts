export class Entity {
  constructor(private id: string) {}

  getId(): string {
    return this.id;
  }

  setId(id: string): Entity {
    this.id = id;
    return this;
  }
}
