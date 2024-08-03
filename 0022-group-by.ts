interface Array<T> {
  groupBy(fn: (item: T) => string): Record<string, T[]>;
}

Array.prototype.groupBy = function (fn) {
  const groups = {};
  this.forEach((item) => {
    const property = fn(item);
    if (!Object.hasOwn(groups, property)) groups[property] = [];
    groups[property].push(item);
  });
  return groups;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
