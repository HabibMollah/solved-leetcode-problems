function* fibGenerator(): Generator<number, any, number> {
  let [current, next] = [0, 1];

  while (true) {
    yield current as number;
    [current, next] = [next, current + next];
  }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
