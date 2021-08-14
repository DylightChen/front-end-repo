/*
 * @Author: Dylight
 * @Date: 2021-08-12 11:23:44
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-14 15:08:19
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
      console.log(node);
      while (current.next) {
        current = current.next;
      }
      console.log(current);
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
node.removeAt(1);
console.log(JSON.stringify(node.getHead()));
