# 数据类型

- [数据类型](#%e6%95%b0%e6%8d%ae%e7%b1%bb%e5%9e%8b)
  - [简介](#%e7%ae%80%e4%bb%8b)
  - [Number 类型](#number-%e7%b1%bb%e5%9e%8b)
    - [BigInt](#bigint)
    - [十六进制，二进制和八进制](#%e5%8d%81%e5%85%ad%e8%bf%9b%e5%88%b6%e4%ba%8c%e8%bf%9b%e5%88%b6%e5%92%8c%e5%85%ab%e8%bf%9b%e5%88%b6)
    - [toString(base)](#tostringbase)
    - [Rounding](#rounding)
  - [String 类型](#string-%e7%b1%bb%e5%9e%8b)
  - [Boolean 类型](#boolean-%e7%b1%bb%e5%9e%8b)
  - [null 值](#null-%e5%80%bc)
  - [undefined](#undefined)
  - [object 和 symbol](#object-%e5%92%8c-symbol)
  - [typeof 运算符](#typeof-%e8%bf%90%e7%ae%97%e7%ac%a6)
  - [类型转换](#%e7%b1%bb%e5%9e%8b%e8%bd%ac%e6%8d%a2)
    - [字符串转换](#%e5%ad%97%e7%ac%a6%e4%b8%b2%e8%bd%ac%e6%8d%a2)

## 简介

JavaScript 变量可以保存任意类型，变量前一刻是字符串，下一刻就可以变成 number 类型：

```js
// 没有错误
let message = "hello";
message = 123456;
```

允许这种操作的编程语言被称为“动态类型”（dynamically typed）语言。

JavaScript 有八种基本数据类型：

- `number` 用于任何类型的数字：整数或浮点数，在 $\plusmn2^{53}$ 范围内。
- `bigint`，任何长度的整数。
- `string`，字符串。
- `boolean`, true or false。
- `null`，未知的值。
- `undefined`，未定义的值。
- `symbol`，唯一的标识符。
- `object`，更复杂的数据结构。

## Number 类型

```js
let n = 123;
n = 12.345;
```

number 类型表示整数和浮点数。

除了常规数字，还有一些特殊类型：`Infinity`, `-Infinity` 和 `NaN`:

- `Infinity` 无穷大，可以通过除以0得到

```js
alert( 1 / 0 ); // Infinity
```

也可以直接使用：

```js
alert( Infinity ); // Infinity
```

- `NaN` 用于表示错误计算结果：

```js
alert( "not a number" / 2 ); // NaN，这样的除法是错误的
```

`NaN` 是粘性的，即任何对 `NaN` 的任何操作都返回 `NaN`。

> JavaScript 对任何数学运算都是安全的，最坏就是得到 `NaN`，不会抛出错误。

### BigInt

`number` 类型值范围限制于 $2^{53}$ 到 $-2^{53}$ 之间，在特殊情况需要更大的数字，如加密或微妙精度的时间戳。

`BigInt` 类型可表示任意长度的整数。通过将 `n` 附加到整数字段的末尾创建 `BigInt`:

```js
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
```

### 十六进制，二进制和八进制

十六进制在 JavaScript 被广泛用于表示颜色、字符编码等。`0x` 开头：

```js
alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)
```

二进制和八进制使用很少，对应前缀 `0b` 和 `0o`:

```js
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides
```

### toString(base)

`num.toString(base)` 返回带有给定 `base` 的进制中 `num` 的字符串表示：

```js
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111
```

`base` 值可以从 `2` 到 `36`，默认为 `10`。

常见的用例如下：

- base=16 用于十六进制颜色，字符编码等，数字可以是 0..9 或 A..F。
- base=2 主要用于调试按位操作，数字可以是 0 或 1。
- base=36 是最大值，数字可以是 0..9 或 A..Z。整个拉丁字母用来表示一个数字。对于 36 来说，一个有趣而有用的例子是，当我们需要将一个较长的数字标识符变成较短的时候，例如做一个简短的URL。可以简单地用基数为 36 的数字系统表示：

```js
alert( 123456..toString(36) ); // 2n9c
```

请注意 `123456..toString(36)` 中的两个点不是拼写错误。如果我们想直接在一个数字上调用一个方法，比如上面例子中的 `toString`，那么我们需要在它后面放置两个点 ..。

如果我们放置一个点：`123456.toString(36)`，那么会出现错误，因为 JavaScript 语法暗示了第一个点之后的小数部分。如果我们再放一个点，那么 JavaScript 知道小数部分是空的，现在进入方法。

也可以写 `(123456).toString(36)`。

### Rounding

使用数字时最常用的操作之一是数值舍入。

有几个内置的数值舍入函数：

- `Math.floor`

向下舍入：3.1 变成 3，-1.1 变成 -2。

- `Math.ceil`

向上舍入：3.1 变成 4，-1.1 变成 -1。

- `Math.round`

向最近的整数舍入：3.1 变成 3, 3.6变成4，-1.1变成-1`。

- `Math.trunc`（IE 浏览器不支持这个方法）

删除小数点后的所有内容而不舍入：3.1 变成 3，-1.1 变成 -1。

以下是总结它们之间差异的表格：

||Math.floor|Math.ceil|Math.round|Math.trunc|
|---|---|---|---|---|
|3.1|3|4|3|3|
|3.6|3|4|4|3|
|-1.1|-2|-1|-1|-1|
|-1.6|-2|-1|-2|-1|


## String 类型

字符串放在引号中：

```js
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
```

在 JavaScript 中有三种包含字符串的方式：

1. 双引号："Hello".
2. 单引号：'Hello'.
3. 反引号：`Hello`.

JavaScript 从左向右计算表达式。不同的次序会产生不同的结果。

双引号和单引号都是“简单”引用，在 JavaScript 中两者几乎没有什么差别。

反引号是 **功能扩展** 引号。它们允许我们通过将变量和表达式包装在 `${…}` 中，来将它们嵌入到字符串中。例如：

```js
let name = "John";

// 嵌入一个变量
alert( `Hello, ${name}!` ); // Hello, John!

// 嵌入一个表达式
alert( `the result is ${1 + 2}` ); // the result is 3
```

`${...}` 内的表达式会被计算，计算结果以字符串输出。需要注意，该方式仅适用于反引号。

> JavaScript 没有 Character 类型，只有 `string` 类型。

## Boolean 类型

boolean 类型仅包含 `true` 和 `false`。

## null 值

`null` 表示“无”，“未知”的特殊值，非不存在的值：

```js
let age = null;
```

## undefined

`undefined` 和 `null` 类似自成类型，表示未被赋值。

如果一个变量声明后未被赋值，其值就是 `undefined`:

```js
let x;

alert(x); // 弹出 "undefined"
```

## object 和 symbol

`object` 用于存储数据集合和更复杂的实体。

`symbol` 用于创建对象的唯一标识符。

## typeof 运算符

`typeof` 运算符返回参数的类型。

它支持两种语法形似：

1. 作为运算符：`typeof x`。
2. 函数形式：`typeof(x)`。

即有括号和没括号得到的结果相同。

`typeof x` 的调用会以字符串的形式返回数据类型：

```js
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```

`typeof null` 返回 `object`，这是 JavaScript 语言的一个错误，实际上它并不是 `object.`

## 类型转换

大多数情况下，运算符和函数会自动将赋予他们的值转换为正确的类型。

比如，`alert` 会自动将任何值都转换为字符串以进行显示。算术运算符会将值转换为数字。

在某些情况下，我们需要将值显式地转换为我们期望的类型。

### 字符串转换

