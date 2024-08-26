/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (const n of nums)
    if (map.has(n)) map.set(n, map.get(n) + 1);
    else map.set(n, 1);

  const buckets = Array(nums.length + 1);
  for (const [k, v] of map) {
    if (!Array.isArray(buckets[v])) buckets[v] = [];
    buckets[v].push(k);
  }

  let result = [];
  for (let i = buckets.length; i > 0 && result.length < k; i--) {
    const item = buckets[i];

    if (Array.isArray(item) && item.length > 0) {
      result = result.concat(item.slice(0, k));
    }
  }
  return result;
};
