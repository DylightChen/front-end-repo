/*
 * @Author: Dylight
 * @Date: 2021-08-10 10:17:54
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-11 11:02:24
 * @FilePath: /Algorithm/算法练习/removeDuplicates.js
 * @Description: 规定空间复杂度为o（1）
 */

var removeDuplicates = function (nums) {
    if (nums == null || nums.length == 0) return 0
    let p = 0;
    let q = 1;
    //双指针
    while (q < nums.length) {
        if (nums[p] !== nums[q]) {
            //不相等就替换位置
            // 优化q-1>1才进行替换，避免一直不相同原地复制
            nums[p + 1] = nums[q]
            p++
        }
        q++
    }
    return p+1
}
console.log(removeDuplicates([1,1,2]));