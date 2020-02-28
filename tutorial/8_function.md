# 函数

- [函数](#%e5%87%bd%e6%95%b0)
  - [函数声明](#%e5%87%bd%e6%95%b0%e5%a3%b0%e6%98%8e)
  - [函数表达式](#%e5%87%bd%e6%95%b0%e8%a1%a8%e8%be%be%e5%bc%8f)

## 函数声明

如：

```js
function showMessage() {
  alert( 'Hello everyone!' );
}
```

带参数：

```js
function name(parameters) {
  ...body...
}
```

函数声明方式如下所示：

```js
function name(parameters, delimited, by, comma) {
  /* code */
}
```

- 作为参数传递给函数的值，会被复制到函数的局部变量。
- 函数可以访问外部变量。但它只能从内到外起作用。函数外部的代码看不到函数内的局部变量。
- 函数可以返回值。如果没有返回值，则其返回的结果是 undefined。

## 函数表达式

```js
function sayHi() {   // (1) 创建
  alert( "Hello" );
}

let func = sayHi;    // (2) 复制

func(); // Hello     // (3) 运行复制的值（正常运行）！
sayHi(); // Hello    //     这里也能运行（为什么不行呢）
```

解释一下上段代码发生的细节：

- (1) 行声明创建了函数，并把它放入到变量 sayHi。
- (2) 行将 sayHi 复制到了变量 func。请注意：sayHi 后面没有括号。如果有括号，func = sayHi() 会把 sayHi() 的调用结果写进func，而不是 sayHi 函数 本身。
- 现在函数可以通过 sayHi() 和 func() 两种方式进行调用。