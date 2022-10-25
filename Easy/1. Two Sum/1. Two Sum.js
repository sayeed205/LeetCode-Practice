/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

/* <=================== alternative ans ===================> */

/**  const twoSum = (nums, target) => {
 *  let ans = {};
 *  for (let i = 0; i < nums.length; i++) {
 *  if (ans[target - nums[i]] !== undefined) {
 *  return [ans[target - nums[i]], i];
 *    }
 *    ans[nums[i]] = i;
 *  }
 *
 *  return [];
 *};
 */
