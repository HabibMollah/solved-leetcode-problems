type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const p1 = Promise.resolve(fn(...args));
    const p2 = new Promise((_, reject) =>
      setTimeout(reject, t, "Time Limit Exceeded")
    );
    return Promise.race([p1, p2]);
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
