const items = new WeakMap();

export default class Stack {
  constructor() {
    items.set(this, []);
  }

  push(element) {
    const s = items.get(this);
    s.push(element);
  }

  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
  }

  peek() {
    const s = items.get(this);
    return s[s.length - 1];
  }

  isEmpty() {
    const s = items.get(this);

    return s.length === 0;
  }

  size() {
    return items.get(this).length;
  }

  clear() {
    items.set(this, []);
  }

  toString() {
    return items.get(this).toString();
  }
}
