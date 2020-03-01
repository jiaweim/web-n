# 函数

- [函数](#%e5%87%bd%e6%95%b0)
  - [函数声明（Function declarations）](#%e5%87%bd%e6%95%b0%e5%a3%b0%e6%98%8efunction-declarations)
  - [函数表达式（function expression）](#%e5%87%bd%e6%95%b0%e8%a1%a8%e8%be%be%e5%bc%8ffunction-expression)
  - [函数调用（Calling functions）](#%e5%87%bd%e6%95%b0%e8%b0%83%e7%94%a8calling-functions)
  - [Function scope](#function-scope)
  - [Scope and the function stack](#scope-and-the-function-stack)
    - [递归（Recursion）](#%e9%80%92%e5%bd%92recursion)
    - [Nested functions and closures](#nested-functions-and-closures)
    - [变量保留](#%e5%8f%98%e9%87%8f%e4%bf%9d%e7%95%99)
    - [多重嵌套函数](#%e5%a4%9a%e9%87%8d%e5%b5%8c%e5%a5%97%e5%87%bd%e6%95%b0)

## 函数声明（Function declarations）

函数定义（function definition），也称为函数声明 (function declaration, or function statement) 以 `function` 关键字开头，后面跟着：

- 函数名称。
- 函数参数，放在括号中，多个参数以逗号分隔。
- 以JavaScript 语句定义的函数内容，放在大括号中。

基本框架：

```js
function name(parameters, delimited, by, comma) {
  /* code */
}
```

例如：

```js
function square(number) {
  return number * number;
}
```

该函数包含一个参数 `number`，`return` 语句指定返回的值。函数说明：

- 原始类型参数（如 `number`）按值传递；如果函数修改了参数值，不影响外部的变量。
- 对象类型参数（如 `Array`）按引用传递；函数对参数的修改在外部可见。
- 函数可以返回值；如果没有返回值，默认为 `undefined`。

例如:

```js
function myFunc(theObject) {
  theObject.make = "Toyota";
}
var mycar = { make: "Honda", model: "Accord", year: 1998 };

var x, y;
x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"

console.log(x);
console.log(y);
```

## 函数表达式（function expression）

函数声明除了采用上面的函数声明，还可以使用函数表达式（function expression）。

使用函数表达式可以创建匿名函数（即没有名字）。下面重新定义上面的 `square` 函数：

```js
const square = function(number) { return number * number }
var x = square(4) // x gets the value 16
```

也可以提供名称：

```js
const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

console.log(factorial(3))
```

函数表达式在将**函数作为参数**传递给其它函数时很有用。例如，下面的 `map` 函数第一个参数是函数对象，第二个参数是数组：

```js
function map(f, a) {
  let result = []; // Create a new Array
  let i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
```

下面定义一个函数作为参数，并调用上面的函数：

```js
const f = function(x) {
   return x * x * x;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f,numbers);
console.log(cube);
```

输出 `[ 0, 1, 8, 125, 1000 ]`。

## 函数调用（Calling functions）

函数调用时，被调用函数必须在 scope 中，不过其声明可以 hoisted (在调用代码下面)。例如：

```js
console.log(square(5));
/* ... */
function square(n) { return n * n }
```

函数的 scope 和其声明所在的函数相同（如果在顶层声明，则为整个程序）。

> hoisted 仅限于函数声明方式，用函数表达式则不行。下面的代码就不对：

```js
console.log(square)    // square is hoisted with an initial value undefined.
console.log(square(5)) // Uncaught TypeError: square is not a function
const square = function(n) {
  return n * n;
}
```

函数可以调用自身（递归）：

```js
function factorial(n) {
  if (n === 0 || n === 1)
    return 1;
  else
    return n * factorial(n - 1);
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
```

## Function scope

在函数内部定义的变量不能从函数外部访问，因此其 scope 限于函数内。但是函数可以访问其所在 scope 的所有变量和函数。

换句话说，在全局范围内（global）定义的函数可以访问全局范围内定义的所有变量。在函数内部定义的函数可范围其父函数中的所有变量，以及父函数可以访问的其它变量。

例如：

```js
// The following variables are defined in the global scope
var num1 = 20,
    num2 = 3,
    name = 'Chamahk';

// This function is defined in the global scope
function multiply() {
    return num1 * num2;
}

console.log(multiply()) // 60

// A nested function example
function getScore() {
    var num1 = 2,
        num2 = 3;

    function add() {
        return name + ' scored ' + (num1 + num2);
    }

    return add();
}

console.log(getScore()); // "Chamahk scored 5"
```

## Scope and the function stack

### 递归（Recursion）

函数可以引用并调用自身。函数引用自身的方式有三种：

1. 函数名
2. `arguments.callee`
3. 在范围内引用函数的变量

例如：

```js
var foo = function bar() {
   // statements go here
}
```

在函数内部，下面三种调用方法是等价的：

1. `bar()`
2. `arguments.callee()`
3. `foo()`

调用自身的函数称为递归函数。递归在某些方面和循环类似，两者都多次执行相同代码，都需要一个条件中断执行（避免无限循环或无限递归）。

例如，下面的循环：

```js
var x = 0;
while (x < 10) { // "x < 10" is the loop condition
   // do stuff
   x++;
}
```

可以将其改成递归函数：

```js
function loop(x) {
  if (x >= 10) // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    return;
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```

不过有些算法用简单循环很难实现，用递归就很简单。例如获得树结构（如 DOM）的所有节点：

```js
function walkTree(node) {
  if (node == null)
    return;
  // do something with node
  for (var i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}
```

相对循环，此处一次递归调用或导致多次调用。

理论上可以将任何递归算法转换为非递归算法，不过其逻辑往往复杂很多，而且需要使用到堆栈。

实际上递归自身使用了堆栈：函数堆栈（function stack）。其堆栈行为可以从下面的例子看出：

```js
function foo(i) {
  if (i < 0)
    return;
  console.log('begin: ' + i);
  foo(i - 1);
  console.log('end: ' + i);
}
foo(3);

// Output:

// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3
```

### Nested functions and closures

可以将一个函数嵌套在另一个函数中。嵌套函数（inner）仅限于其外部函数使用。这组成一个闭包（closure）。闭包是一个表达式（通常是一个函数），具有变量以及变量所在环境的访问权。

嵌套函数为闭包，表示嵌套函数 "inherit" 其外部函数的参数和变量。换句话说，**内部函数具有外部函数的 scope**。

总之：

- 内部函数只有外部函数中能访问。
- 内部函数组成了一个闭包：内部函数可以使用外部函数的参数和变量，而外部函数不能使用内部函数的参数和变量。

下面是一个嵌套函数：

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41
```

由于内部函数组成了闭包，所以可以调用外部函数，并为外部和内部函数指定参数：

```js
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // 将其看作将参数+3的函数
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8
```

### 变量保留

从前面例子可以看出，在返回 `inside` 函数时外部函数的参数 `x` 的值被保留下来了。这是闭包的特征：保留其引用的所有参数和变量。

由于每次调用可能提供不同参数，所以每次调用 `outside` 都创建一个新的闭包。当返回的 `inside` 不可用时才释放内存。

这和其它对象中保存引用没有什么不同，但是由于没有直接设置引用，所以不是那么明显。

### 多重嵌套函数

函数可以多重嵌套。例如：

- 函数 A 包含函数 B，函数 B 包含函数 C。
- 函数 B 和函数 C都构成了闭包。所有 B 可以访问 A，C可以访问B。
- 另外，由于C可以访问B，B可以访问A，所以C可以访问A。

