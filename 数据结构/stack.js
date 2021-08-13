/*
 * @Author: Dylight
 * @Date: 2021-08-11 13:32:21
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-12 10:33:04
 * @FilePath: /Algorithm/数据结构/stack.js
 * @Description: js构建栈
 */

class Stack {
  //class 定义私有变量
  #item = [];
  constructor() {}
  push(ele) {
    this.#item.push(ele);
  }
  getItem() {
    return this.#item;
  }
  pop() {
    return this.#item.pop();
  }
  peek() {
    return this.#item[item.length - 1];
  }
  isEmpty() {
    return this.#item.length === 0;
  }
  clear() {
    return (this.#item = []);
  }
  size() {
    return this.#item.length;
  }
}
let stack = new Stack();

console.log(stack.getItem());
console.log(stack.isEmpty());
console.log(stack.clear());
console.log(stack.size());


// 十进制转二进制示例

let toBinary = (nums) => {
  let stack = new Stack();
  let lost;
  let res = "";
  while (nums > 0) {
    lost = nums % 2;
    stack.push(lost);
    nums = nums >> 1;
  }
  while (!stack.isEmpty()) {
    res += stack.pop();
  }
  return res;
};

console.log(toBinary(5));
