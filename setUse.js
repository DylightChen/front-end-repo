/*
 * @Author: Dylight
 * @Date: 2021-07-30 16:09:22
 * @LastEditors: Dylight
 * @LastEditTime: 2021-07-30 16:12:29
 * @FilePath: /Algorithm/setUse.js
 * @Description: 交并差集合
 */
let arr1 = [4, 6, 2, 5, 7, 4]
let arr2 = [5, 8, 2, 1, 9, 1, 2]

let set1 =new Set(arr1)
let set2 =new Set(arr2)
let arr3 = new Set([ ...arr1, ...arr2 ])
//并集
console.log(arr3);
//交集
let arr4 = new Set([...set1].filter(x => set2.has(x)))
console.log([...arr4]);
//差集
let arr5 = new Set([...set1].filter(v => !set2.has(v)))
let arr6 = new Set([...set2].filter(v => !set1.has(v)))
let arr7 = [...arr5, ...arr6]
console.log(arr7);