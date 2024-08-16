type ArrayType = { id: number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const map = new Map<number, ArrayType>();
  arr1.forEach((obj) => map.set(obj.id, obj));
  arr2.forEach((obj) =>
    map.has(obj.id) ? Object.assign(map.get(obj.id), obj) : map.set(obj.id, obj)
  );
  return Array.from(map.values()).sort((obj1, obj2) => obj1.id - obj2.id);
}
