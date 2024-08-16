function compactObject(obj: Obj | JSONValue): Obj | JSONValue {
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
  if (typeof obj === "object") {
    const result = {};
    for (const key in obj) {
      const value = obj[key];
      if (value) result[key] = compactObject(value);
    }
    return result;
  }
  return obj;
}
