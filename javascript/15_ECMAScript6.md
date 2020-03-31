# ECMAScript 6

- [ECMAScript 6](#ecmascript-6)
  - [简介](#%e7%ae%80%e4%bb%8b)
  - [变量和字符串](#%e5%8f%98%e9%87%8f%e5%92%8c%e5%ad%97%e7%ac%a6%e4%b8%b2)
    - [var & let](#var--let)
    - [const](#const)
    - [Template Literals](#template-literals)
  - [ES6 中的循环和函数](#es6-%e4%b8%ad%e7%9a%84%e5%be%aa%e7%8e%af%e5%92%8c%e5%87%bd%e6%95%b0)
    - [ES6 函数](#es6-%e5%87%bd%e6%95%b0)
    - [默认参数](#%e9%bb%98%e8%ae%a4%e5%8f%82%e6%95%b0)
  - [ES6 objects](#es6-objects)
    - [Computed Property Names](#computed-property-names)
    - [Object.assign()](#objectassign)
  - [Destructuring](#destructuring)
    - [ES6 中的数组解构](#es6-%e4%b8%ad%e7%9a%84%e6%95%b0%e7%bb%84%e8%a7%a3%e6%9e%84)
    - [对象解构](#%e5%af%b9%e8%b1%a1%e8%a7%a3%e6%9e%84)
  - [Rest & Spread](#rest--spread)
    - [ES6 Rest Parameters](#es6-rest-parameters)
    - [Spread Operator](#spread-operator)
      - [Spread in function calls](#spread-in-function-calls)
      - [Spread in array literals](#spread-in-array-literals)
      - [Spread in object literals](#spread-in-object-literals)
  - [Classes in ES6](#classes-in-es6)
    - [Class Method in ES6](#class-method-in-es6)
    - [继承](#%e7%bb%a7%e6%89%bf)
  - [ES6 Map](#es6-map)
    - [方法](#%e6%96%b9%e6%b3%95)
  - [ES6 Set](#es6-set)

## 简介

ECMAScript (ES) 是为标准化 JavaScript 创建的脚本语言规范。

第六版，即 ECMAScript 6 (ES6)，随后被重命名为 ECMAScript 2015，添加了大量的新语法用于复杂应用的开发，包括 classes, modules, iterators, for/of loops, generators, arrow functions, binary data, typed arrays, collections, promises等等。

换句话说，ES6 是 ES5 的超集。

## 变量和字符串

### var & let

在 ES6 中，声明变量的方式有三种：

```js
var a = 10;
const b = 'hello';
let c = true;
```

使用哪种声明方法取决于所需的 scope。Scope 表示变量的可见区域。

`var` defines a variable globally, or locally to an entire function regardless of block scope, `let` allows you to declare variables that are limited in scope to the block, statement, or expression in which they are used.

- `var` 变量在函数内或函数外整个有效。
- `let` 限制于对应的 scope。

例如：

```js
if (true) {
  let name = 'Jack';
}
alert(name); //generates an error
```

这里标量 `name` 只能在 if 语句的 scope 可访问。

下面我们用一个例子来解释 `let` 和 `var` 的差别：

```js
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

在循环中使用 `let` 最合适：

```js
for (let i = 0; i < 3; i++) {
  document.write(i);
}
```

### const

`const` 变量和 `let` 变量有相同的 scope，不同点在于 const 变量是 immutable——即不可以修改。例如下面会抛出错误：

```js
const a = 'Hello';
a = 'Bye';
```

### Template Literals

Template literals 是以字符串形式输出变量的一种方法。

在 ES6 之前，只能用如下方式：

```js
let name = 'David';
let msg = 'Welcome ' + name + '!';
console.log(msg);
```

ES6 引入的一种新的格式化方式：

```js
let name = 'David';
let msg = `Welcome ${name}!`;
console.log(msg);
```

要注意，template literals 中使用的是反引号 (``)，而不是单引号或双引号。

`${expression}` 是一个占位符，可以包含任意表达式，表达式计算后其值插入到 template literals 中。例如：

```js
let a = 8;
let b = 34;
let msg = `The sum is ${a+b}`;
console.log(msg);
```

## ES6 中的循环和函数

在 JavaScript 可以使用 `for` 循环迭代列表中的值：

```js
let arr = [1, 2, 3];
for (let k = 0; k < arr.length; k++) {
  console.log(arr[k]);
}
```

而 `for...in` 循环用于迭代 `object` 对象的 `enumerable` keys：

```js
let obj = {a: 1, b: 2, c: 3};
for (let v in obj) {
  console.log(v);
}
```

`for...in` **不可用于数组**，因为其顺序不能保证。并且迭代的变量是 string 类型的key，而不是 number。

ES6 引入了 `for...of` 循环，对 iterable 对象创建循环：

```js
let list = ["x", "y", "z"];
for (let val of list) {
  console.log(val);
}
```

`for...of` 也支持其它 iterable 对象，包括 string:

```js
for (let ch of "Hello") {
  console.log(ch);
}
```

### ES6 函数

在 ES6 之前，函数定义方式如下：

```js
function add(x, y) {
  var sum = x+y;  
  console.log(sum);
}
```

ES6 引入了一种新的方式，上面的函数可以写成如下形式：

```js
const add = (x, y) => {
  let sum = x + y;  
  console.log(sum);
}
```

对简单函数，特别是只有一个参数的函数，使用该方式定义十分简洁，可以省略 `function` 和 `return` 关键字以及部分括号：

```js
const greet = x => "Welcome " + x;
```

如果没参数，括号不能省略：

```js
const x = () => alert("Hi");
```

### 默认参数

在 ES6 中，可以在函数签名中添加默认参数：

```js
function test(a, b = 3, c = 42) {
  return a + b + c;
}
console.log(test(5)); //50
```

默认值表达式在函数调用时从左到右进行分析。

## ES6 objects

JavaScript 变量可以是包含属性的 `Object` 类型。`object` 也可以包含 function 类型的属性，称为 `method`，是 `object` 可以执行的行为。

方法定义不需要属性定义需要的冒号和 `function`关键字，如：

```js
let tree = {
  height: 10,
  color: 'green',
  grow() {
    this.height += 2;
  }
};
tree.grow();
console.log(tree.height); // 12
```

在初始化属性时，如果属性名称和变量名相同，还可以省略属性名。例如：

```js
let height = 5;
let health = 100;

let athlete = {
  height,
  health
};
```

如果包含重复命名的属性，后面的会覆盖前面的值：

```js
var a = {x: 1, x: 2, x: 3, x: 4};
```

### Computed Property Names

在 ES6 中可以使用 computed property names。通过方括号 `[]`，可以使用表达式作为变量名。在需要指定对象，如获取的日期、邮箱、id等创建对象时很有用。如：

```js
let prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};
```

### Object.assign()

通过 `assign()` 方法可以将多个对象合并成一个新的 `object`。

`Object.assign()` 用来创建对象副本很方便。

例如：

```js
let person = {
  name: 'Jack',
  age: 18,
  sex: 'male'
};
let student = {
  name: 'Bob',
  age: 20,
  xp: '2'
};
let newStudent = Object.assign({}, person, student);
```

`Object.assign()` 的第一个参数是我们希望添加新属性的目标对象。

后面的所有参数都是第一个参数的属性源。属性源的数目不限，不过顺序很重要，因为后面的属性会覆盖前面同名的属性。

下面我们尝试创建对象的副本。

如果采用引用，修改新引用的值也会改变原对象的值，如：

```js
let person = {
  name: 'Jack',
  age: 18
};

let newPerson = person; //  newPerson references person
newPerson.name = 'Bob';

console.log(person.name); // Bob
console.log(newPerson.name); // Bob
```

要避免 mutation，我们使用 `Object.assign()` 创建新对象：

```js
let person = {
  name: 'Jack',
  age: 18
};

let newPerson = Object.assign({}, person);
newPerson.name = 'Bob';

console.log(person.name); // Jack
console.log(newPerson.name); // Bob
```

此时对新对象的修改不影响原对象。

最后，还可以在里面添加新的属性，而不仅限于合并对象：

```js
let person = {
  name: 'Jack',
  age: 18
};

let newPerson = Object.assign({}, person, {name: 'Bob'});
```

## Destructuring

### ES6 中的数组解构

下面从实例看什么是解构：

```js
let arr = ['1', '2', '3'];
let [one, two, three] = arr;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
```

使用函数解构：

```js
let a = () => {
  return [1, 3, 2];
};

let [one, , two] = a();
```

注意上面跳过了第二个值。

解构方便赋值和交换值：

```js
let a, b, c = 4, d = 8;
[a, b = 6] = [2]; // a = 2, b = 6

[c, d] = [d, c]; // c = 8, d = 4
```

### 对象解构

对象解构和对象解构差不多，将属性解构为变量：

```js
let obj = {h:100, s: true};
let {h, s} = obj;

console.log(h); // 100
console.log(s); // true
```

也可以直接赋值：

```js
let a, b;
({a, b} = {a: 'Hello ', b: 'Jack'});

console.log(a + b); // Hello Jack
```

其中括号和分号是必须的。不过也可以采用下面的语法：

```js
let {a, b} = {a: 'Hello ', b: 'Jack'};
console.log(a + b);
```

还可以给变量重命名：

```js
var o = {h: 42, s: true};
var {h: foo, s: bar} = o;

//console.log(h); // Error
console.log(foo); // 42
```

最后，还可以给变量默认值：

```js
var obj = {id: 42, name: "Jack"};

let {id = 10, age = 20} = obj;

console.log(id); // 42
console.log(age); // 20
```

## Rest & Spread

### ES6 Rest Parameters

在 ES6 之前，如果需要可变数目的参数，我们可以使用 `arguments` 对象，它是一个类数组对象，可以访问传入函数的参数。例如检查数组是否包含传入的所有参数：

```js
function containsAll(arr) {
  for (let k = 1; k < arguments.length; k++) {
    let num = arguments[k];
    if (arr.indexOf(num) === -1) {
      return false;
    }
  }
  return true;
}
let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));
```

我们可以传入任意数目的参数，然后通过 `arguments` 对象访问。

ES6 引入了一个可读性更高的 `rest parameter` 语法：

```js
function containsAll(arr, ...nums) {
  for (let num of nums) {
    if (arr.indexOf(num) === -1) {
      return false;
    }
  }
  return true;
}
```

其中 `。..nums` 称为 `rest parameter`。它包含传入的所有额外参数，其中的三个点 `...` 称为 Spread operator。

如果没有额外参数，则余下的参数就是空数组，而不是 `undefined`。

### Spread Operator

Spread operator 类似于 Rest Parameter，不过在对象、数组或函数调用中使用有额外目的。

#### Spread in function calls

将数组的元素作为函数的参数很常见，在 ES6 之前，我们使用如下方式：

```js
function myFunction(w, x, y, z) {
  console.log(w + x + y + z);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(4));
```

而在 ES6 中使用 spread operators 要简单许多：

```js
const myFunction = (w, x, y, z) => {
  console.log(w + x + y + z);
};
let args = [1, 2, 3];
myFunction(...args, 4);
```

例：

```js
var dateFields = [1970, 0, 1];  // 1 Jan 1970
var date = new Date(...dateFields);
console.log(date);
```

#### Spread in array literals

在 ES6 之前通过如下方式在数组中间添加元素：

```js
var arr = ["One", "Two", "Five"];

arr.splice(2, 0, "Three");
arr.splice(3, 0, "Four");
console.log(arr);
```

可以通过 `push`, `splice`, `concat` 等方法实现在不同位置添加元素。在 ES6 中使用 Spread operator 更容易：

```js
let newArr = ['Three', 'Four'];
let arr = ['One', 'Two', ...newArr, 'Five'];
console.log(arr);
```

#### Spread in object literals

在对象中 spread operator 将源对象的属性copy到新对象。如：

```js
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };

const clonedObj = {...obj1}; // { foo: "bar", x: 42 }
const mergedObj = {...obj1, ...obj2}; // { foo: "baz", x: 42, y: 5 }
```

不过合并的话结果可能和你想想中不一样：

```js
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };
const merge = (...objects) => ({...objects});

let mergedObj = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }

let mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }
```

Shallow cloning or merging objects is possible with `Object.assign()`。

## Classes in ES6

class 用关键字 `class` 声明，且包含构造函数：

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

声明的 class 可以用来创建多个对象，如：

```js
const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3);
```

Class 的声明遵从在文件中的顺序。

也可以通过 class expression 定义 class，class 可以有或没有名称。命名 class实例:

```js
var Square = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

无名 class 实例：

```js
var Square = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

`constructor` 是用于创建和初始化对象的特殊方法，一个 class 只有一个 constructor.

### Class Method in ES6

ES6 中不需要 `function` 关键字创建类方法。一种 class method 是 `prototype` method，class的对象可用：

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return this.height * this.width;
  }
}
const square = new Rectangle(5, 5);
console.log(square.area); // 25
```

其中 `area` 是一个 getter 方法，`calcArea` 是 method。

另一种 method 是静态方法，不能通过类实例调用。

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}
const p1 = new Point(7, 2);
const p2 = new Point(3, 8);

console.log(Point.distance(p1, p2));
```

### 继承

通过 `extends` 关键字继承，子类继承父类的属性和方法。例：

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

let dog = new Dog('Rex');
dog.speak();
```

如果子类中有构造函数，必须首先调动 `super()`。

## ES6 Map

Object 和 Map 的主要差别：

1. Map 的 key 可以是任意类型，包括 functions, objects, primitives。
2. 可以获得 Map size。
3. 可以直接对 Map 迭代。
4. 设计很多添加和移除操作时，Map 效率更高。

`size` 属性获得 map 中的键值对数目：

```js
let map = new Map([['k1', 'v1'], ['k2', 'v2']]);

console.log(map.size); // 2
```

### 方法

- set(key, value) Adds a specified key/value pair to the map. If the specified key already exists, value corresponding to it is replaced with the specified value.
- get(key) Gets the value corresponding to a specified key in the map. If the specified key doesn't exist, undefined is returned.
- has(key) Returns true if a specified key exists in the map and false otherwise.
- delete(key) Deletes the key/value pair with a specified key from the map and returns true. Returns false if the element does not exist.
- clear() Removes all key/value pairs from map.
- keys() Returns an Iterator of keys in the map for each element.
- values() Returns an Iterator of values in the map for each element.
- entries() Returns an Iterator of array[key, value] in the map for each element.

例如：

```js
let map = new Map();

map.set('k1', 'v1').set('k2', 'v2');

console.log(map.get('k1')); // v1

console.log(map.has('k2')); // true

for (let kv of map.entries())
  console.log(kv[0] + " : " + kv[1]);
```

## ES6 Set

Set 对象可以保存唯一值。

`size` 属性为其中数值个数。例：

```js
let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

console.log(set.size); // 5
```

方法

- add(value) Adds a new element with the given value to the Set.
- delete(value) Deletes a specified value from the set.
- has(value) Returns true if a specified value exists in the set and false otherwise.
- clear() Clears the set.
- values() Returns an Iterator of values in the set.

例：

```js
let set = new Set();

set.add(5).add(9).add(59).add(9);

console.log(set.has(9));

for (let v of set.values())
  console.log(v);
```
