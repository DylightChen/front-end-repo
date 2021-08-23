/*
 * @Author: Dylight
 * @Date: 2021-08-23 15:45:32
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-23 18:43:59
 * @FilePath: /Algorithm/数据结构/set.js
 * @Description:  集合 
 */


/**
 * @LastEditTime: Do not edit
 * @Description: 集合是一个数学概念 
 * 1，无重复性 
 * 2，空集
 * 3，子集 
 * js 构建集合 键值对相等
 * has， add， remove
 * @param {*}
 * @return {*}
 */

class mySet{
    #item={}
    has(value){
        return this.#item.hasOwnProperty(value);
    }
    add(value){
        if(this.has(value))return 
        this.#item[value] = value
        return value
    }
    remove(value){
        if(!this.has(value))return false
        delete this.#item[value]
        return true
    }
    getItems(){
        return this.#item
    }
    clear(){
        this.#item ={}
    }
    size(){
        // item.hasOwnProperty(item[i])
        return Object.keys(this.#item).length
    }
    value(){
       return Object.values(this.#item)
    }
    union(otherSet){
        // let res = new mySet()
        let arr = this.value()
        let otherValue = otherSet.value()
        console.log(otherSet.value())
        
        let  res = [...otherValue].map(item=>{
            console.log(item)
            // otherSet.add(item
        
          return this.add(item)
         })
         return this.getItems()
         console.log(otherSet)
        //  return res.getItems()
        //  console.log(object)
    }
}
let myset = new mySet()
let myset2 =new mySet()
console.log(myset2.add(13))
console.log(myset2.add(2))
console.log(myset2.add(5))

console.log(myset.add(1))
console.log(myset.add(2))

console.log(myset.union(myset2))
console.log(myset.getItems())
console.log(myset.size());