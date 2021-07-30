/*
 * @Author: Dylight
 * @Date: 2021-07-30 15:48:49
 * @LastEditors: Dylight
 * @LastEditTime: 2021-07-30 15:53:57
 * @FilePath: /Algorithm/commonNmbStr.js
 * @Description: 查找数组公共后缀
 */



let nums = [11316229, 11326229, 1133629, 11346229, 11229];
// let nums = ['flower', 'flow', 'flight'];
function commonNmbStr(nums) {
    if (!nums) return '';
    //返转字符串
    nums = nums.map((item) => {
        item = item.toString().split('').reverse().join('');
        return item;
    });
    //查找最短元素
    let lens = nums.map((item) => {
        return item.length;
    });
    console.log(lens);
    let minLen = Math.min.apply(null, lens);
    let firstStr = nums[lens.indexOf(minLen)];
    console.log(firstStr);
    //二分法查找
    const loop = (start, end, str) => {
        if (start > end) return '';
        const middle = start + ((end - start) >> 1);
        console.log(`middle${middle}`);
        let s = str.slice(0, middle);
        for (let item of nums) {
            if (item.slice(0, middle) !== s) return loop(start, middle - 1, s) || '';
        }
        return loop(middle + 1, end, str) || s.split('').reverse().join('');
    };
    // 接受参数  ： 起始位置  字符长度， 字符
    return loop(1, firstStr.length, firstStr);
}
let a = commonNmbStr(nums);
console.log(a);