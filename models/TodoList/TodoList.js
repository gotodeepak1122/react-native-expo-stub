export class TodoList {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }

  static create(text) {
    return new TodoList(Date.now(), text);
  }

  toggle() {
    this.completed = !this.completed;
    return this;
  }
} 