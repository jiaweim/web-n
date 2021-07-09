# 脚本定义

- [脚本定义](#脚本定义)
  - [`script` 标签](#script-标签)
    - [`<head>` 内脚本](#head-内脚本)
    - [`<body>` 内脚本](#body-内脚本)
  - [外部脚本](#外部脚本)
    - [外部 JavaScript 脚本的优势](#外部-javascript-脚本的优势)
    - [async 和 defer](#async-和-defer)

2021-05-28, 14:10
***

## `script` 标签

HTML 中的 JavaScript 代码必须放在 `<script>` 和 `</script>` 标签之间。如：

```html
<script>
document.getElementById("demo").innerHTML = "我的第一段 JavaScript";
</script>
```

HTML 中可以放置任意数目的 JavaScript 脚本，可以放在 `<body>` 或 `<head>` 中，可以按需求选择。当浏览器遇到 `<script>` 标签，会自动执行其中的代码。

### `<head>` 内脚本

下面在 HTML 页面的 `<head>` 中定义脚本：

```html
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "段落已被更改。";
}
</script>
</head>

<body>

<h2>Head 中的 JavaScript</h2>

<p id="demo">一个段落。</p>

<button type="button" onclick="myFunction()">试一试</button>

</body>
</html>
```

在 `<head>` 定义的 `myFuction` 函数，在点击按钮时调用。

### `<body>` 内脚本

```html
<!DOCTYPE html>
<html>
<body>

<h2>Body 中的 JavaScript</h2>

<p id="demo">一个段落。</p>

<button type="button" onclick="myFunction()">试一试</button>

<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "段落已被更改。";
}
</script>

</body>
</html>
```

可以看到函数定义在 `<body>` 元素的末尾。将脚本放在  `<body>` 末尾可以改善显示的速度，因为编译脚本会拖慢显示，导致一段空白页面显示时间。

## 外部脚本

脚本可以放在单独的文件中，如 aScript.js:

```js
function myFunction() {
   document.getElementById("demo").innerHTML = "段落被更改。";
}
```

外部脚本应该说更有用，有利于代码的重复利用。

JavaScript 脚本文件扩展名为 `.js`。

在HTML 中使用外部脚本，在 `<script>` 标签中指定 `src` 属性即可：

```html
<script src="/path/to/script.js"></script>
```

这里 `/path/to/script.js` 是脚本文件从根目录开始的绝对路径。

这里也可以使用完整的 URL 地址：

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>
```

外部脚本和 `<script>` 标签一样，可以放在 `<head>` 或 `<body>` 中。

要使用多个脚本，用多个标签：

```html
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
…
```

一般只有最简单的脚本才嵌入到 HTML 中，一般都放在单独的脚本文件中。使用独立的脚本的好处是浏览器会下载它，然后保存在浏览器的缓存中。之后页面想要相同的脚本就从缓存中获取，而不用再次下载。这样既节省流量，也使得页面加载更快。

> 如果设置了 `src` 属性，`script` 标签内容将会被忽略。

即一个单独的 `<script>` 标签不能同时包含 `src` 属性和内部包裹的代码。例如：

```html
<script src="file.js">
  alert(1); // 此内容会被忽略，因为设定了 src
</script>
```

为了让上面的例子工作，可以将其分为两个 `<script>` 标签：

```html
<script src="file.js"></script>
<script>
  alert(1);
</script>
```

### 外部 JavaScript 脚本的优势

使用外部脚本文件的优势：

- 分离HTML和代码
- 使 HTML 和 JavaScript 都更易于阅读和维护
- 已缓存的 JavaScript 文件可加速网页的加载

### async 和 defer

`<scrpt>` 属性 `async` 和 `defer` 设置外部脚本载入和执行的方式：

- `async`，告诉浏览器尽可能的异步执行脚本。添加该属性后，不保证脚本文件的执行顺序。

例如：

```html
<script async src="service.js"></script>
<script async src="app.js"></script>
```

`app.js` 可能比 `service.js` 先执行，所以你要确认两者执行没有依赖性。

- `defer`属性要求浏览器在解析完整个文档后再执行脚本。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript defer demonstration</title>
    <script defer src="defer-script.js"></script>
</head>
<body>
</body>
</html>
```

如果 `<script>` 放在 `<head>` 里，但是脚本依然会等到 `</html>` 才执行。
