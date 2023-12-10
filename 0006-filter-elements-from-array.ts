type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  const result: number[] = [];
  let index = 0;
  for (let item of arr) {
    if (Boolean(fn(item, index))) {
      result.push(item);
    }
    index++;
  }
  return result;
}
