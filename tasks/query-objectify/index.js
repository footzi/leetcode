const task = (string) => {
  const res = {};

  const v = string.split('&');

  console.log(v);

  v.forEach((item) => {
    const [key, value] = item.split('=');

    const keys = key.split('.');

    let current = null;

    console.log(current);
    keys.forEach((k) => {
      console.log(current);
      if (res[k]) {
        // res[k] = { ...current };
      } else {
        res[k] = {};
        current = res[k];
      }
    });

    // console.log(keys);
  });

  // console.log(res);
  // console.log(v);

  return res;
};

const string = 'user.name.surname=Vasily';
// const string = 'user.name.surname=Vasily&user.name.firstname=Alexey&color.theme=%20Blue&color.size=10&color.size=20';

task(string);
// console.log();

module.exports = task;
