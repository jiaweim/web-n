
# JavaScript 输出

- [JavaScript 输出](#javascript-%e8%be%93%e5%87%ba)
  - [JavaScript 显示方法](#javascript-%e6%98%be%e7%a4%ba%e6%96%b9%e6%b3%95)
  - [innerHTML](#innerhtml)
  - [document.write()](#documentwrite)
  - [window.alert()](#windowalert)
  - [console.log()](#consolelog)

## JavaScript 显示方法

JavaScript 显示数据方式：

- `window.alert()` 写入警告框
- `document.write()` 写入 HTML 输出
- `innerHTML` 写入 HTML 元素
- `console.log()` 写入浏览器控制台

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