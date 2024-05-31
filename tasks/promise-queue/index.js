class PromiseQueue {
  constructor() {
    this.queue = [];
  }

  add(promise) {
    this.queue.push(promise);

    this.call(promise);
    //
  }

  async call(promise) {
    try {
      await promise();
    } catch (e) {
    } finally {
    }
  }

  next() {}
}

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

const queue = new PromiseQueue();

queue.add(promise1);
// queue.add(promise2);

// promise1.then(() => {
//   console.log('PROMISE 1');
// });
// promise2.then(() => {
//   console.log('PROMISE 2');
// });
