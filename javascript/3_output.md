
# JavaScript 输出

- [JavaScript 输出](#javascript-%e8%be%93%e5%87%ba)
  - [JavaScript 显示方法](#javascript-%e6%98%be%e7%a4%ba%e6%96%b9%e6%b3%95)
  - [innerHTML](#innerhtml)
  - [document.write()](#documentwrite)
  - [window.alert()](#windowalert)
  - [console.log()](#consolelog)
  - [prompt](#prompt)
  - [confirm](#confirm)

## JavaScript 显示方法

JavaScript 显示数据方式：

- `window.alert()` 警告框显示信息。
- `document.write()` 写入 HTML 输出
- `innerHTML` 写入 HTML 元素
- `console.log()` 写入浏览器控制台
- `prompt` 显示信息要求用户输入文本。点击确定返回文本，点击取消或按下 Esc 键返回 `null`。
- `confirm` 显示信息等待用户点击确定或取消。点击确定返回 true，点击取消或按下 Esc 键返回 false。

## innerHTML

`innerHTML` 属性定义 HTML 元素的内容：

```html
<!DOCTYPE html>
<html>
<body>

<h1>我的第一张网页</h1>

<p>我的第一个段落</p>

<p id="demo"></p>

<script>
 document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>
```

NOTE: 更改 HTML 元素的 innerHTML 属性是在 HTML 中显示数据的常用方法。

## document.write()

`document.write()` 一般用于测试。

例如：

```html
<!DOCTYPE html>
<html>
<body>

<h1>我的第一张网页</h1>

<p>我的第一个段落</p>

<script>
document.write(5 + 6);
</script>

</body>
</html> 
```

NOTE：在 HTML 文档完全加载后使用 `document.write()` 将删除已有的 HTML，例如，我们添加一个事件以延后脚本执行：

```html
<!DOCTYPE html>
<html>
<body>

<h1>我的第一张网页</h1>

<p>我的第一个段落</p>

<button onclick="document.write(5 + 6)">试一试</button>

</body>
</html>
```

点击 "试一试"，所有内容清空，仅有 11.

所以 `document.write()` 仅用于测试。

## window.alert()

`window.alert()` 通过一个警告弹窗显示数据：

```html
<!DOCTYPE html>
<html>
<body>

<h1>我的第一张网页</h1>

<p>我的第一个段落</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html> 
```

## console.log()

`console.log()` 在控制台输出数据，可以通过 F12 打开浏览器的控制台，查看输出效果：

```html
<!DOCTYPE html>
<html>
<body>

<h1>我的第一张网页</h1>

<p>我的第一个段落</p>

<script>
console.log(5 + 6);
</script>

</body>
</html>
```

## prompt

`prompt` 函数接收两个参数：

```js
result = prompt(title, [default]);
```

浏览器会显示一个带有文本消息的模态窗口，还有 input 框和确定/取消按钮。

- title

显示给用户的文本

- default

可选的第二个参数，指定 input 框的初始值。

用户可以在 prompt 对话框的 input 框内输入一些内容，然后点击确定。或者他们可以通过按“取消”按钮或按下键盘的 Esc 键，以取消输入。

`prompt` 将返回用户在 input 框内输入的文本，如果用户取消了输入，则返回 null。

## confirm

语法：

```js
result = confirm(question);
```

confirm 函数显示一个带有 `question` 以及确定和取消两个按钮的模态窗口。

点击确定返回 `true`，点击取消返回 `false`。

例如：

```js
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // 如果“确定”按钮被按下，则显示 true
```
