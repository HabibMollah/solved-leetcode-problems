function isEmpty(obj: Obj): boolean {
  return JSON.stringify(obj) === "{}" || JSON.stringify(obj) === "[]"
    ? true
    : false;
}
