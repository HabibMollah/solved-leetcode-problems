type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
  let previousTimerId;
  return function (...args) {
    clearTimeout(previousTimerId);
    previousTimerId = setTimeout(() => {
      fn(...args);
    }, t);
  };
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
