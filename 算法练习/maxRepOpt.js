/*
 * @Author: Dylight
 * @Date: 2021-07-30 15:48:07
 * @LastEditors: Dylight
 * @LastEditTime: 2021-07-30 16:42:26
 * @FilePath: /Algorithm/index.js
 * @Description: 
 */

var maxRepOpt = function(text) {
    let strToObj = text.split("")
    let set = new Set(strToObj)
    //去重 后创建 map对象存储出现次数
    let arr = [...set]
    let map = new Map()
    for (let item of arr) {
        map.set(item, 0)
    }
    strToObj.forEach(item => {
        for (let [key, val] of map) {
            if (item === key) {
                map.set(key, ++val)
            }
        }
    })
    //查找最大属性值
    let mapValue = [...map.values()]
    let max = Math.max(...mapValue)
    
    return max
};
console.log(maxRepOpt('aaabbaaa'));