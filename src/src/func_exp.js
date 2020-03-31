function map(f, a) {
  let result = [];
  for (let i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}

const f = function(x) {
  return x * x * x;
};

let numbers = [0, 1, 2, 5, 10];
let cub = map(f, numbers);
console.log(cub);
