function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const result: number[] = [];
  let index = 0;
  for (let item of arr) {
    result.push(fn(item, index));
    index++;
  }
  return result;
}
