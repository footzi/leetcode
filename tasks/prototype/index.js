const Rabbit = {
  name: 'Piter',
};

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

const b = new Book();

Book.getMoney = function () {
  console.log(this);
};

// console.log(Book);
// console.log(b.getMoney());

// Можно относледовать поле объекта
Book.prototype = Rabbit;

console.log(Book.prototype.constructor);

Book.prototype.getSummary = function () {
  return this.author + this.author + this.year;
};

function Magazine(title, author, year) {
  Book.call(this, title, author, year);
  this.pages = '100';
}

Magazine.prototype = Book.prototype;
// Magazine.prototype.constructor = Book;

const b1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);

const m1 = new Magazine('1984', 'George Orwell', 1949);

// console.log(b1.getSummary());
// console.log(m1.getSummary());

// const a = ['a', 'b', 'c'];
// const c = a.reverse();
//
// console.log(a, c, a === c);

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// delay(1000).then(() => console.log('выполнилось через 3 секунды'));
function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Симуляция запроса на сервер
    setTimeout(() => {
      const data = {
        'https://api.example.com/user': { id: 1, name: 'John Doe' },
        'https://api.example.com/posts': [
          { id: 1, title: 'Post 1' },
          { id: 2, title: 'Post 2' },
        ],
        'https://api.example.com/comments': [
          { id: 1, comment: 'Nice post!' },
          { id: 2, comment: 'Thanks for sharing!' },
        ],
      };

      if (data[url]) {
        resolve(data[url]);
      } else {
        reject(new Error('Data not found'));
      }
    }, 1000);
  });
}

const getUserData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetchData('https://api.example.com/user');

      resolve(data);
    } catch (e) {
      console.error(e);
    }
    // fetchData('https://api.example.com/user')
    //   .then((data) => {
    //     resolve(data);
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });
  });
};

const getPosts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetchData('https://api.example.com/posts');

      resolve(data);
    } catch (e) {
      console.error(e);
    }
  });
};

const getComments = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetchData('https://api.example.com/comments');

      resolve(data);
    } catch (e) {
      console.error(e);
    }
  });
};

// getUserData().then((data) => {
//   console.log(data);
// });

const getAllData = () => {
  return new Promise((resolve, reject) => {
    const promiseAll = Promise.all([getUserData(), getPosts(), getComments()]);

    promiseAll.then((data) => {
      resolve({
        user: data[0],
        posts: data[1],
        comments: data[2],
      });
    });
  });
};

getAllData().then((data) => {
  // console.log(data);
});

// const getDataWithRetries = (url, maxCount) => {
//   let count = 0;
//
//   const getData = async () => {
//     try {
//       const data = await fetchData(url);
//
//       if (data) {
//         return data;
//       }
//     } catch (e) {
//       if (count >= maxCount) {
//         throw new Error('max count');
//       } else {
//         count++;
//         getData();
//       }
//     }
//   };
//
//   return new Promise(async (resolve, reject) => {
//     getData()
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((e) => {
//         reject(e);
//       });
//   });
// };
//
// function getDataWithRetries(url, retries) {
//   return new Promise((resolve, reject) => {
//     const attempt = (remainingRetries) => {
//       fetchData(url)
//         .then(resolve)
//         .catch((error) => {
//           if (remainingRetries === 0) {
//             reject(error);
//           } else {
//             attempt(remainingRetries - 1);
//           }
//         });
//     };
//     attempt(retries);
//   });
// }
//
// getDataWithRetries('https://api.example.com/user2', 3)
//   .then((data) => {
//     console.log(data, 'data');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const findSum = (arr, sum) => {
  let start = 0;
  let end = arr.length - 1;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[start] + arr[end] > sum) {
      end--;
    } else {
      start++;
    }

    if (arr[start] + arr[end] === sum) {
      return [arr[start], arr[end]];
    }
  }
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise 1');
  }, 500);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise 2');
  }, 700);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise 3 rejected');
  }, 100);
});

const promiseAll = (promises) => {
  const result = [];
  let counter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach(async (prom, index) => {
      // try {
      //   const data = await prom;
      //
      //   result[index] = data;
      //   counter++;
      //
      //   if (counter === promises.length) {
      //     resolve(result);
      //   }
      // } catch (e) {
      //   console.log(e);
      //   reject(e);
      // }

      prom
        .then((data) => {
          result[index] = data;
          counter++;

          if (counter === promises.length) {
            resolve(result);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });

    // resolve(result);

    // resolve(result);
  });
};

// promiseAll([promise1, promise2, promise3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e, 'catch');
//   });

const debounce = (fn, delay) => {
  let timerId = 0;
  // let isCanRun = false;
  //
  // // let isCanRun = false;
  // console.log(isCanRun);
  // //
  // const innerFn = () => {
  //   if (isCanRun) {
  //     return fn();
  //   }
  //
  //   // return fn();
  // };
  //
  // setTimeout(() => {
  //   isCanRun = true;
  //   innerFn();
  // }, delay);
  //
  // setInterval(() => {
  //   isCanRun = true;
  //   fn();
  //
  //   // return fn();
  // }, delay);
  timerId = setTimeout(() => {}, delay);

  return () => {
    if (timerId) {
      clearTimeout(timerId);
      return fn();
    }
  };
};

const doSomething = () => {
  return 'I did something';
};

const go = debounce(doSomething, 100);

// console.log(go());
// console.log(go());
// console.log(go());

// setTimeout(() => {
//   console.log(go());
// }, 50);
// //
// setTimeout(() => {
//   console.log(go());
// }, 150);

const randomizeArray = (array, maxCount = array.length) => {
  const result = [...array];

  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));

    console.log(i);
    console.log(j);

    [result[i], result[j]] = [result[j], result[i]];
  }

  console.log(result);
  return result.slice(0, maxCount);
};

const string = ['cat', 'dog', 'home'];

randomizeArray(string);

const array = ['cat', 'dog', 'home'];

// [array[0], array[2]] = ['bird', 'rabbit'];
// console.log(array);
