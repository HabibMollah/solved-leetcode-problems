type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  events = new Map<string, Callback[]>();

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    const eventCallbacks = this.events.get(eventName);
    eventCallbacks.push(callback);

    return {
      unsubscribe: () => {
        const idx = eventCallbacks.indexOf(callback);
        eventCallbacks.splice(idx, 1);
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    if (this.events.has(eventName))
      return this.events.get(eventName).map((callback) => callback(...args));
    return [];
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
