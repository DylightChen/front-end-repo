/*
 * @Author: Dylight
 * @Date: 2021-08-04 10:22:53
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-10 10:09:12
 * @FilePath: /Algorithm/2.js
 * @Description:移除元素 规定复杂度为o(n)
 */


// var removeElement = function(nums, val) {
//     let ans = 0;
//     for(const num of nums) {
//         if (num != val) {
//             //不相同元素存进原数组进行覆盖,
//             nums[ans] = num;
//             ans++;
//         }
//     }
//     // 覆盖次数即为不存在目标值的数组长度
//     return ans;
// };

var removeElement = function(nums, val) {
    let ans = nums.length;
    for (let i = 0; i < ans;) {
        if (nums[i] == val) {
            //出现目标值用最后一个元素替换，替换一次长度减一
            nums[i] = nums[ans - 1];
            // console.log(nums[i]);
            ans--;
        } else {
            //未出现目标值进行下次比对
            i++;
        }
    }
    console.log(nums);
    return ans;
};

console.log(removeElement([0,1,2,2,3,0,4,2],2))