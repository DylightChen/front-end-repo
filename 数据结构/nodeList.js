/*
 * @Author: Dylight
 * @Date: 2021-08-12 11:23:44
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-14 18:17:12
 * @FilePath: /Algorithm/数据结构/nodeList.js
 * @Description: 链表
 */

class LinkedList {
  //头
  #head = null;
  // 长度
  #length = 0;
  constructor() {}
  // innner类 节点
  getNode() {
    return class Node {
      constructor(element) {
        this.element = element;
        this.next = null;
      }
    };
  }
  //链表尾部添加
  append(element) {
    //创建节点
    let _node = this.getNode();
    let node = new _node(element);
    if (this.#head === null) {
      //如果头为空，直接设为头
      this.#head = node;
    } else {
      let current = this.#head;
      //循环  如果满足节点next 存在 将current 替换为 将current的next
      // 不满足退出循环，将当前的current.next设置为appen值
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.#length++;
  }
  insert(position, element) {
    if (position > -1 && position < this.#length) {
      let _node = this.getNode();
      let node = new _node(element);
      if (position === 0) {
        //如果位置为0直接设置为头
        let current = this.#head;
        this.#head = node;
        this.#head.next = current;
      } else {
        let index = 0;
        let current = this.#head;
        let previous = null;
        // 从头开始检查，把当前节点存到previous上，当前节点存为current的next。
        // 一步步向前直到要插入的位置后退出
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        // 将插入节点接在previous的后面
        // 将当前节点接在node后面
        previous.next = node;
        node.next = current;
      }
      this.#length++;
    }
  }
  removeAt(position) {
    if (position < 0 || position > this.#length) return;
    if (position === 0) {
      let current = this.#head;
      this.#head = current.next;
    } else {
      let index = 0;
      let current = this.#head;
      let previous = null;
      //   this.#head = current.next;
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      previous.next = current.next;
    }
    this.#length++;
  }
  indexOf(element) {
    let current = this.#head;
    let index = 0;
    while (current) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  remove(element) {
    this.removeAt(this.indexOf(element));
  }
  getHead() {
    return this.#head;
  }
}

let node = new LinkedList();
node.append(1);
node.append(4);
node.append(3);
node.append(3);
node.append(3);
// node.append(4);
// node.append(4);
node.append(4);
node.insert(2, 10);

var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  console.log(l1);
  console.log(l2);
  if (l1.element < l2.element) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
let node1 = new LinkedList();
let node2 = new LinkedList();
node1.append(1);
node1.append(2);
node1.append(3);
node2.append(1);
node2.append(2);
node2.append(3);
console.log(node1);
console.log(node2);
let a = mergeTwoLists(node1.getHead(), node2.getHead());
console.log(JSON.stringify(a));
console.log(node.remove(3));
node.removeAt(1);
console.log(node.indexOf(3));
console.log(JSON.stringify(node.getHead()));
export default LinkedList;
