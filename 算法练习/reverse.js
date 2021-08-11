/*
 * @Author: Dylight
 * @Date: 2021-08-03 14:00:57
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-03 16:07:59
 * @FilePath: /Algorithm/算法练习/reverse.js
 * @Description: 
 */


const reverse = (x) => {
    const sign = x > 0 ? 1 : -1
    //  取绝对值
    const absNum = Math.abs(x)
    //split在大数据量下性能比Array.from好
    console.log(Array.from(absNum.toString()));
    const reverse = absNum.toString().split("").reverse().join('')
    if (reverse > Math.pow(2, 31)) {
      return 0
    }
    console.log(typeof reverse);
    console.log(typeof reverse * sign); 
    return reverse * sign
  }
console.log(reverse(-123));