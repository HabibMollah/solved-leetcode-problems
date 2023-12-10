type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe(valToCompare) {
      if (valToCompare === val) return true;
      throw 'Not Equal';
    },
    notToBe(valToCompare) {
      if (valToCompare !== val) return true;
      throw 'Equal';
    },
  };
}

expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"
