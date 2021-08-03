/*
 * @Author: Dylight
 * @Date: 2021-07-31 00:21:22
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-03 13:56:12
 * @FilePath: /Algorithm/c.js
 * @Description: 判断回文数
 */
var isPalindrome = function (x) {
    if (x.length === 1) return true
    let _x= x.toString()
    let middle
    let type
    //根据奇数偶数来比对前后半段。好像并没有快多少 0.0
    const loop = (middle, str, type) => {
        
        let a = str.substring(0, middle)
        let b = type? str.substring(middle, str.length):str.substring(middle+1, str.length)
        console.log(a,b);
        if (a === b.split('').reverse().join('')) {
            return true
        } else {
            return false
        }
     }
        
    if (_x.length % 2 === 0) {
        middle = _x.length / 2
        type =true
    } else {
        middle = ((_x.length - 0) >> 1)
        loop(middle, _x, false)
    }
    

    return loop(middle, _x, type)
    

    
};
console.log(isPalindrome(12121));