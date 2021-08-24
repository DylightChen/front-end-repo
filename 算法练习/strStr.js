/*
 * @Author: Dylight
 * @Date: 2021-08-16 14:55:14
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-16 16:35:13
 * @FilePath: /Algorithm/算法练习/strStr.js
 * @Description: RNM 这题这么难，BMP算法是什么鬼
 */

var strStr = function (haystack, needle) {
  if (!needle) return 0;
  return haystack.indexOf(needle);
};
console.log(strStr("hello", "ll"));
