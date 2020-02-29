# Iterators & Generators

`Symbol.iterator` 是对象的默认 iterator。`for...of` 循环基于 iterator 的类型。

例如，下面演示如何使用 iterator 以及如何使用 generator functions:

```js
let myIterableObj = {
  [Symbol.iterator] : function* () {
    yield 1; yield 2; yield 3;
...
console.log([...myIterableObj]);
```

首先创建一个对象，使用 `Symbol.iterator` 和 generator function 填充值。

第二行用 `*` 和 `function` 关键字声明的函数称为 generator function。

下面用一个简单的例子说明 gen functions 的功能：

```js
function* idMaker() {
  let index = 0;
  while (index < 5)
    yield index++;
}
var gen = idMaker();
console.log(gen.next().value);
```

我们可以退出迭代，随后进入其状态保持不变。用于异步编程十分强大，特别是和 Promises 结合使用。
