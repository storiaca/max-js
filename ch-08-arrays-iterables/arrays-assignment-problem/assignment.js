const numbers = [4, 78, 6, 35, 12, 72, 192, 55];

const greaterThanFive = numbers.filter((num) => num > 5);

console.log(greaterThanFive);

const objectNumbers = numbers.map((number) => ({ num: number }));

console.log(objectNumbers);

const multipleNumbers = numbers.reduce((acc, next) => acc * next, 1);

console.log(multipleNumbers);

function findMax(...arr) {
  let curMax = arr[0];
  let curMin = arr[0];
  for (num of arr) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}

const [min, max] = findMax(...numbers);

console.log(min, max, findMax(...numbers));

const userIds = new Set();

userIds.add(10);
userIds.add(-5);
userIds.add(-5);

console.log(userIds);
