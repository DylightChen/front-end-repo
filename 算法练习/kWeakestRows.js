/*
 * @Author: Dylight
 * @Date: 2021-07-31 00:20:46
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-03 13:56:49
 * @FilePath: /Algorithm/算法练习/kWeakestRows.js
 * @Description: 找出含1最少的数组
 */
var kWeakestRows = function(mat, k) {
    let map = new Map()
    //利用map 存储数据源的index
    mat.forEach((element, index)=> {
        map.set(element, index)
    })
    mat.sort();
    console.log(map);
    //根据排序后的数组查找map中的值
    let a = Array.from({ length: k }, (_, i) => {
        return map.get(mat[i]) 
       
    })
    
    console.log(a);
    
    return  a
};
let mat = [[1,1,0,0,0],
[1,1,1,1,0],
[1,0,0,0,0],
[1,1,0,0,0],
    [1, 1, 1, 1, 1]]

console.log(kWeakestRows(mat,3));