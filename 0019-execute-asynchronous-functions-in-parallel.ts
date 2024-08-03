type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const result: T[] = [];
    let count = 0;
    functions.forEach((f, i) => {
      f()
        .then((res) => {
          result[i] = res;
          count++;
          if (count === functions.length) resolve(result);
        })
        .catch((err) => reject(err));
    });
  });
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
