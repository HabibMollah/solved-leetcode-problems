type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  const promise1Response = await promise1;
  const promise2Response = await promise2;

  return new Promise((resolve) => resolve(promise1Response + promise2Response));
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
