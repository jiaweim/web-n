# JavaScript 语法

- [JavaScript 语法](#javascript-%e8%af%ad%e6%b3%95)
  - [Code structure](#code-structure)
    - [JavaScript 程序](#javascript-%e7%a8%8b%e5%ba%8f)
    - [Statements](#statements)
    - [分号 `；`](#%e5%88%86%e5%8f%b7)
    - [空白](#%e7%a9%ba%e7%99%bd)
    - [行长度和换行](#%e8%a1%8c%e9%95%bf%e5%ba%a6%e5%92%8c%e6%8d%a2%e8%a1%8c)
    - [代码块](#%e4%bb%a3%e7%a0%81%e5%9d%97)
    - [关键词](#%e5%85%b3%e9%94%ae%e8%af%8d)
  - [语法](#%e8%af%ad%e6%b3%95)
  - [变量](#%e5%8f%98%e9%87%8f)
    - [标识符](#%e6%a0%87%e8%af%86%e7%ac%a6)
    - [常量](#%e5%b8%b8%e9%87%8f)
    - [字面量](#%e5%ad%97%e9%9d%a2%e9%87%8f)
  - [运算符](#%e8%bf%90%e7%ae%97%e7%ac%a6)
    - [算数运算符](#%e7%ae%97%e6%95%b0%e8%bf%90%e7%ae%97%e7%ac%a6)
    - [赋值运算符](#%e8%b5%8b%e5%80%bc%e8%bf%90%e7%ae%97%e7%ac%a6)
    - [字符串运算符](#%e5%ad%97%e7%ac%a6%e4%b8%b2%e8%bf%90%e7%ae%97%e7%ac%a6)
    - [比较运算符](#%e6%af%94%e8%be%83%e8%bf%90%e7%ae%97%e7%ac%a6)
    - [逻辑运算符](#%e9%80%bb%e8%be%91%e8%bf%90%e7%ae%97%e7%ac%a6)
    - [类型运算符](#%e7%b1%bb%e5%9e%8b%e8%bf%90%e7%ae%97%e7%ac%a6)
    - [位运算符](#%e4%bd%8d%e8%bf%90%e7%ae%97%e7%ac%a6)
    - [运算符优先级](#%e8%bf%90%e7%ae%97%e7%ac%a6%e4%bc%98%e5%85%88%e7%ba%a7)
  - [注释](#%e6%b3%a8%e9%87%8a)
  - [use strict](#use-strict)
    - [浏览器控制台](#%e6%b5%8f%e8%a7%88%e5%99%a8%e6%8e%a7%e5%88%b6%e5%8f%b0)
    - [坚持使用 "use strict"](#%e5%9d%9a%e6%8c%81%e4%bd%bf%e7%94%a8-%22use-strict%22)

## Code structure

### JavaScript 程序

计算机程序是由计算机执行的一系列指令。

在编程语言中，这些指令被称为语句。所以 JavaScript 程序就是一系列的 JavaScript 语句组成的集合。

### Statements

在 HTML 中，JavaScript 语句是由 Web 浏览器执行的指令。例：

```js
var x, y, z; // 语句 1
x = 22; // 语句 2
y = 11; // 语句 3
z = x + y; // 语句 4
```

JavaScript 语句由运算符、表达式、关键字、注释和值等构成。

如下面的语句告诉浏览器在 `id="demo"` 的 HTML 元素中输出 "Hello Kitty.":

```html
<script>
document.getElementById("demo").innerHTML = "Hello Kitty.";
</script>
```

大多数 JavaScript 程序都包含许多 JavaScript 语句，这些语句按照它们被编写的顺序依次执行。

### 分号 `；`

分号表示语句的结尾。如：

```js
a = 5;
b = 6;
c = a + b;
```

分号不是必需的，当存在换行符时，多数情况可以省略分号，下面的代码也没问题：

```js
alert('Hello')
alert('World')
```

多数情况也不意味着总是，有很多换行不是分号的例子：

```js
alert(3 +
1
+ 2);
```

代码输出 `6`。

还有其它无法判断的情况，所以强烈建议不要省略分号。

### 空白

JavaScript 会忽略空格，如下面两行是等价的：

```js
var person = "Bill";
var person="Bill";
```

不过为了代码可读性，一般建议在运算符两侧添加空格。

### 行长度和换行

为了代码的可读性，一般将代码长度控制在 80 个字符以内。

如果 JavaScript 语句太长，建议在某个运算符处换行，如：

```js
document.getElementById("demo").innerHTML =
 "Hello Kitty.";
```

### 代码块

JavaScript 语句可以用花括号 `{...}` 组合起来。

如定义函数：

```js
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello Kitty.";
    document.getElementById("myDIV").innerHTML = "How are you?";
}
```

### 关键词

关键词是 JavaScript 语言保留的单词，不可用作变量名。下面列出 JavaScript 常用的关键词：

|关键词|描述|
|---|--|
|break|终止 switch 或循环|
|continue|跳出循环并在顶端开始|
|debugger|停止执行 JavaScript，并调用调试函数（如果可用）|
|do ... while|执行语句块，并在条件为真时重复代码块|
|for|标记需被执行的语句块，只要条件为真|
|function|声明函数|
|if ... else|标记需被执行的语句块，根据某个条件|
|return|退出函数|
|switch|标记需被执行的语句块，根据不同的情况|
|try ... catch|对语句块实现错误处理|
|var|声明变量|

## 语法

语言的语法定义一套规则，所有的代码按照规则编写。

## 变量

**太长不看版**：

- let， 现代声明变量
- var, 老式什么变量
- const, 声明常量

变量用于存储数据，JavaScript 使用关键字 `let` 声明变量，`=` 用于变量赋值。

如，定义变量 `x`，然后为 `x` 赋值 7：

```js
let x;

x = 7;
```

也可以在声明时赋值：

```js
let x = 7;
```

如果变量未复制，其值为 `undefined`。

> 在旧版本的脚本中可以发现关键字 `var`，`var` 关键字功能与 `let` 大体相同，也用来声明变量。

### 标识符

标识符用于命名变量，在 JavaScript 中的标识符规则：

- 可以包含字母、数字、下划线和美元符（$）
- 标识符的首字符必须是字母、下划线或美元符（$）。
- 区分大小写。
- 保留字（如关键字）不能用作变量名称。

标识符的习惯写法有多种。如

下划线：

```js
let first_name, last_name, master_card, inter_city
```

驼峰式：

```js
let FirstName, LastName, MasterCard, InterCity.
```

JavaScript 推荐使用首字符小写的驼峰式，如：

```js
firstName, lastName, masterCard, interCity
```

### 常量

使用 `const` 声明常量：

```js
const myBirthday = '18.04.1982';
```

常量值保持固定，不允许修改。

常量一般用大写字母命名，如：

```js
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```

### 字面量

数值，有无小数点均可：

```js
15.90

10011
```

字符串，单引号和双引号均可：

```js
"Bill Gates"

'Bill Gates'
```

## 运算符

算数运算符 `+ - * /` 用于计算值，赋值运算符 `=` 给标量赋值。如

```js
(7 + 8) * 10

var x, y;
var x = 7;
var y = 8;
```

### 算数运算符

|运算符|描述|
|---|---|
|+|加法|
|-|减法|
|*|乘法|
|**|幂|
|/|除法|
|%|模|
|++|递加|
|--|递减|

在算数运算中，数被称为**操作数**。

### 赋值运算符

赋值运算符为 JavaScript 变量赋值。

|运算符|例子|等同于|
|---|---|---|
|=|x = y|x = y|
|+=|x += y|x = x + y|
|-=|x -= y|x = x - y|
|*=|x *= y|x = x * y|
|/=|x /= y|x = x / y|
|%=|x %= y|x = x % y|
|<<=|x <<= y|x = x << y|
|>>=|x >>= y|x = x >> y|
|>>>=|x >>>= y|x = x >>> y|
|&=|x &= y|x = x & y|
|^=|x ^= y|x = x ^ y|
|`|=`|`x |= y`|`x = x | y`|
|**=|x **= y|x = x ** y|

### 字符串运算符

`+` 运算符也可用于对字符串进行相加（concatenate，级联）。

例如

```js
txt1 = "Bill";
txt2 = "Gates";
txt3 = txt1 + " " + txt2;
```

此时 `txt3` 为 "Bill Gates"。

`+=` 赋值运算符也可用于相加（级联）字符串：

```js
txt1 = "Hello ";
txt1 += "Kitty!";
```

此时 `txt1` 为 "Hello Kitty!"。

字符串和数字相加时，**数字自动转换为字符串**：

```js
x = 7 + 8;
y = "7" + 8;
z = "Hello" + 7;
```

结果：

```cmd
15
78
Hello7
```

### 比较运算符

|运算符|描述|
|---|---|
|==|等于|
|===|等值等型|
|!=|不相等|
|!==|不等值或不等型|
|>|大于|
|<|小于|
|>=|大于或等于|
|<=|小于或等于|
|?|三元运算符|

### 逻辑运算符

|运算符|描述|
|---|---|
|&&|逻辑与|
|`||`|逻辑或|
|!|逻辑非|

### 类型运算符

|运算符|描述|
|---|---|
|typeof|返回变量的类型|
|instanceof|返回 true，如果对象是对象类型的实例|

### 位运算符

该运算中的任何数值运算数都会被转换为 32 位的数。结果会被转换回 JavaScript 数。

|运算符|描述|例子|等同于|结果|十进制|
|---|---|---|---|---|---|
|&|与|5 & 1|0101 & 0001|0001|1|
|`|`|或|`5 | 1`|`0101 | 0001`|0101|5|
|~|非|~ 5|~0101|1010|10|
|^|异或|5 ^ 1|0101 ^ 0001|0100|4|
|<<|零填充左位移|5 << 1|0101 << 1|1010|10|
|>>|有符号右位移|5 >> 1|0101 >> 1|0010|2|
|>>>|零填充右位移|5 >>> 1|0101 >>> 1|0010|2|

上例使用 4 位无符号的例子。但是 JavaScript 使用 32 位有符号数。

因此，在 JavaScript 中，~ 5 不会返回 10，而是返回 -6。

### 运算符优先级

|值|运算符|描述|实例|
|---|---|---|---|
|20|( )|表达式分组|(3 + 4)
| ||||
|19|.|成员|person.name|
|19|[]|成员|person["name"]|
|19|()|函数调用|myFunction()|
|19|new|创建|new Date()|
| ||||
|17|++|后缀递增|i++|
|17|--|后缀递减|i--|
| ||||
|16|++|前缀递增|++i|
|16|--|前缀递减|--i|
|16|!|逻辑否|!(x==y)|
|16|typeof|类型|typeof x|
| ||||
|15|**|求幂 (ES7)|10 ** 2|
| ||||
|14|*|乘|10 * 5|
|14|/|除|10 / 5|
|14|%|模数除法|10 % 5|
| ||||
|13|+|加|10 + 5|
|13|-|减|10 - 5|
| ||||
|12|<<|左位移|x << 2|
|12|>>|右位移|x >> 2|
|12|>>>|右位移（无符号）|x >>> 2|
| ||||
|11|<|小于|x < y|
|11|<=|小于或等于|x <= y|
|11|>|大于|x > y|
|11|>=|大于或等于|x >= y|
|11|in|对象中的属性|"PI" in Math|
|11|instanceof|对象的实例|instanceof Array|
| ||||
|10|==|相等|x == y|
|10|===|严格相等|x === y|
|10|!=|不相等|x != y|
|10|!==|严格不相等|x !== y|
| ||||
|9|&|按位与|x & y|
|8|^|按位 XOR|x ^ y|
|7|`|`|按位或|`x | y`|
|6|&&|逻辑与|x && y|
|5|`||`|逻辑否|`x || y`|
|4|? :|条件|? "Yes" : "No"|
| ||||
|3|=|赋值|x = y|
|3|+=|赋值|x += y|
|3|-=|赋值|x -= y|
|3|*=|赋值|x *= y|
|3|%=|赋值|x %= y|
|3|<<=|赋值|x <<= y|
|3|>>=|赋值|x >>= y|
|3|>>>=|赋值|x >>>= y|
|3|&=|赋值|x &= y|
|3|^=|赋值|x ^= y|
|3||=|赋值|x |= y|
| ||||
|2|yield|暂停函数|yield x|
|1|,|逗号|7 , 8|

## 注释

注释分为两种：

- 单行注释 `\\`
- 多行注释 `\* *\`

注释的内容被忽略。

## use strict

"use strict" 或 'use strict' 指令放在文件顶部，表示启用 modern mode。如：

```js
"use strict";

// 代码以现代模式工作
...
```

### 浏览器控制台

浏览器控制台默认不启用 `use strict`。如果你的功能依赖于 `use strict`，则在控制台中可能报错。

首先，可以尝试在控制台中用 `Shift+Enter` 多行输入，置顶 `use strict`，如：

```js
'use strict'; <Shift+Enter for a newline>
//  ...your code
<Enter to run>
```

在大多数浏览器中都行得通，如 Firefox 何 Chrome。

如果该方法不行，最可靠的方式是：

```js
(function() {
  'use strict';

  // ...your code...
})()
```

### 坚持使用 "use strict"

虽然还没说明 "use strict" 和默认模式的差别，目前知道如下这样既可：

- "use strict" 将 JavaScript 引擎转换为现代模式，改变了一些内置特性。
- 通过在脚本文件或函数的顶部添加 "use strict" 启用现代模式。
- 部分特性，如 classes, modules 自动启用现代模式。
- 所有的现代浏览器都支持现代模式。
- 推荐总是在脚本文件顶部添加 "use strict"。

