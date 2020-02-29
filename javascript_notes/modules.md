
# 模块

## 简介

JavaScript 社区发明了许多方法将代码组织为模块——一种特殊的可以按需加载的库。

例如：

- AMD — 最古老的模块化系统，最开始应用在 require.js 这个库中。
- CommonJS — 为 Node.js 创建的模块化系统。
- UMD — 另外一个模块化系统，建议作为通用的模块化系统，它与 AMD 和 CommonJS 都是兼容的。

现在这些都将成为过去，但是我们仍然能在一些旧的脚本中找到他们的踪迹。语言级的模块化系统在 2015 年的时候出现在标准中，从那时候起开始逐渐发展，现在已经得到了所有主流浏览器和 Node.js 的支持。

## 什么是模块

模块仅仅是一个文件，一个脚本而已，它就是这么简单。

用一些关键字比如 `export` 和 `import` 来交换模块之间的功能或者从一个模块中调用另一个模块中的函数。

- `export` 关键字表示在当前模块之外可以访问的变量和功能。
- `import` 关键字允许从其他模块中导入一些诸如函数之类的功能等等。

例如，我们有一个名为 sayHi.js 的文件导出一个函数：

```js
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

然后在其他的文件里导入并使用它：

```js
// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
```

## 核心模块功能
