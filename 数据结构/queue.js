/*
 * @Author: Dylight
 * @Date: 2021-08-11 15:57:29
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-12 11:04:12
 * @FilePath: /Algorithm/数据结构/queue.js
 * @Description: 构建队列结构
 */
class Queue {
  //class 定义私有变量
  #item = [];
  constructor() {}
  enqueue(ele) {
    this.#item.push(ele);
  }
  getItem() {
    return this.#item;
  }
  dequeue() {
    return this.#item.shift();
  }
  peek() {
    return this.#item[item.length - 1];
  }
  front () {
    return this.#item[0];
  };
  isEmpty() {
    return this.#item.length === 0;
  }
  clear() {
    return this.#item = [];
  }
  size() {
    return this.#item.length;
  }
}

//击鼓传花示例

let sendFlower = (name, nums) => {
  let queue = new Queue()
  name.forEach(item => {
    queue.enqueue(item)
  })
  console.log(queue.getItem());
  while (queue.size() > 1) {
    for (let i = 0; i < nums; i++){
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  return queue.dequeue()
}

class A extends Queue{
  // super() {
    
  // }
}
let a = new A()
console.log(a.enqueue(1));
console.log(a.getItem());
// let names = ['a', 'v', 'b', 'v', 'r', 'g', 'jf', 'y', 'u', 'd']
// // console.log(names);
// console.log(sendFlower(names, 3));


// let priorityQueue = () => {
//   let item = []
//   let queueItme = (element,priority) => {
//     this.element = element
//     this.priority = priority
//     this.enqueue = (element, priority) => {
//       let queiu = new queueItme(element, priority)
//       for (let i = 0; i < item.length; i++) {
        
//       }
//     }
//   }
// }