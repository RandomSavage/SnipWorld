'use strict'

class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  add(value, position) {
    let node = {
      _value: value,
      _next: null
    };

    if(position === 0) {
      node._next = this._head;
      this._head = node;
    } else {
      let prev = this.get(position - 1);
      let current = prev._next;
      node._next = current;
      prev._next = node;
    }

    this._length++;
  }

  remove(position) {
    if(position === 0) {
      this._head = this._head._next;
    } else {
      let prev = this.get(position - 1);
      prev._next = prev._next._next;
  }

    this.length--;
  }

  get(position) {
    if(position >= this.length) {
      console.log('out of range');
    }
  }
}
