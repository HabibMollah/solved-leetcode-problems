type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  const stack: any = arr.map((x) => [x, n]);
  const result = [];

  while (stack.length > 0) {
    const [curr, depth] = stack.pop();
    if (Array.isArray(curr) && depth > 0) {
      stack.push(...curr.map((x) => [x, depth - 1]));
    } else {
      result.push(curr);
    }
  }

  return result.reverse();
};
