class TimeLimitedCache {
  cache: Map<
    number,
    {
      value: number;
      expired: boolean;
      timerId: ReturnType<typeof setTimeout> | null;
    }
  >;

  constructor() {
    this.cache = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    let alreadyExists = false;

    if (this.cache.has(key)) {
      const result = this.cache.get(key);
      alreadyExists = true;
      if (result?.timerId) clearTimeout(result.timerId);
    }

    const timerId = setTimeout(() => {
      this.cache.set(key, { value, expired: true, timerId: null });
    }, duration);

    this.cache.set(key, { value, expired: false, timerId });

    return alreadyExists;
  }

  get(key: number): number {
    const result = this.cache.get(key);

    if (!result || result.expired) return -1;

    return result.value;
  }

  count(): number {
    let count = 0;

    for (const [k, v] of this.cache) {
      if (!v.expired) count++;
    }

    return count;
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
