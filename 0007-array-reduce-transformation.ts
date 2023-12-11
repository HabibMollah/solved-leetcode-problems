type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  if (nums.length < 1) return init;
  let accum = init;
  for (let item of nums) {
    accum = fn(accum, item);
  }
  return accum;
}
