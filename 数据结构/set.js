/*
 * @Author: Dylight
 * @Date: 2021-08-23 15:45:32
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-24 14:45:43
 * @FilePath: /front-end-repo/数据结构/set.js
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
    //并集,此方法不是纯函数。破坏原集合值
    union(otherSet){
        let otherValue = otherSet.value()
        let otherValues =  [...otherValue]
        otherValues.map(item=>{
          return this.add(item)
         })
         return this.getItems()
    }
    //交集
    intersection(otherSet){
        let res = new mySet()
        this.value().map(item=>{
            console.log('item'+item)
            console.log(otherSet.has(item))
            if(otherSet.has(item)){
                return res.add(item)
            }
        })
        return res
    }
}
let myset = new mySet()
let myset2 =new mySet()
console.log(myset2.add(13))
console.log(myset2.add(2))
console.log(myset2.add(5))

console.log(myset.add(13))
console.log(myset.add(2))

console.log(myset.intersection(myset2).value())
// console.log(myset.getItems())
// console.log(myset.value());