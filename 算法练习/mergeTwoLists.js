/*
 * @Author: Dylight
 * @Date: 2021-08-14 17:19:04
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-14 18:21:02
 * @FilePath: /Algorithm/算法练习/mergeTwoLists.js
 * @Description: 合并两个有序链表
 */

/**
 * @LastEditTime: Do not edit
 * @Description: 循环
 * @param {*} l1
 * @param {*} l2
 * @return {*}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.element < l2.element) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

/**
 * @LastEditTime: Do not edit
 * @Description: 递归
 * @param {*} l1
 * @param {*} l2
 * @return {*}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
