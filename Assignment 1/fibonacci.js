const fibs = (n) => {
  let arr = [];
  (n >= 1) ? arr.push(0) : null;
  (n >= 2) ? arr.push(1) : null;

  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

const fibbonacci = (n) => {
  return (n <= 2) ? n - 1 : fibbonacci(n - 1) + fibbonacci(n - 2);
}

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibbonacci(8)); // 13