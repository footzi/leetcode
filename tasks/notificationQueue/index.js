let busy = false;
let index = 1;

const showNotification = (...args) => {
  return new Promise((resolve, reject) => {
    if (busy) {
      reject(new Error('busy'));
      return;
    }

    busy = true;
    console.log('show notification', index, ...args);

    setTimeout(() => {
      busy = false;
      console.log('hide notification', index++, ...args);
      resolve(args);
    }, 1000);
  });
};

let previousPromise = Promise.resolve();

const showNotificationQueued = (...args) => {
  const currentPromise = previousPromise.then(() => {
    return showNotification(...args);
  });

  previousPromise = currentPromise;

  return showNotificationQueued(...args);
};

console.time('1');
showNotificationQueued('foo', 'bar').then(() => {
  console.timeEnd('1');
});

console.time('2');
showNotificationQueued('foo', 'baz').then(() => {
  console.timeEnd('2');
});

console.time('3');
showNotificationQueued('foo').then(() => {
  console.timeEnd('3');
});

console.time('4');
showNotificationQueued('baz').then(() => {
  console.timeEnd('4');
});
