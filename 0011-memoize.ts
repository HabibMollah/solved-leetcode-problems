type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  const cache = new Map();
  return function (...args) {
    // console.log(cache);
    const key = args.toString();
    if (cache.has(key)) return cache.get(key);
    const value = fn(...args);
    cache.set(key, value);
    return cache.get(key);
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1
