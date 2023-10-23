/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let reducedArr = init;
  for (let i = 0; i < nums.length; i++) {
    reducedArr = fn(init, nums[i]);
    init = reducedArr;
  }
  return reducedArr;
};
