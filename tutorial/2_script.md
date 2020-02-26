# 脚本定义

- [脚本定义](#%e8%84%9a%e6%9c%ac%e5%ae%9a%e4%b9%89)
  - [`script` 标签](#script-%e6%a0%87%e7%ad%be)
    - [`<head>` 内脚本](#head-%e5%86%85%e8%84%9a%e6%9c%ac)
    - [`<body>` 内脚本](#body-%e5%86%85%e8%84%9a%e6%9c%ac)
  - [外部脚本](#%e5%a4%96%e9%83%a8%e8%84%9a%e6%9c%ac)
    - [外部 JavaScript 脚本的优势](#%e5%a4%96%e9%83%a8-javascript-%e8%84%9a%e6%9c%ac%e7%9a%84%e4%bc%98%e5%8a%bf)
    - [外部引用](#%e5%a4%96%e9%83%a8%e5%bc%95%e7%94%a8)

## `script` 标签

HTML 中的 JavaScript 代码必须放在 `<script>` 和 `</script>` 标签之间。如：

```html
<script>
document.getElementById("demo").innerHTML = "我的第一段 JavaScript";
</script>
```

HTML 中可以放置任意数目的 JavaScript 脚本，可以放在 `<body>` 或 `<head>` 中，可以按需求选择。

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

可以看到函数定义在 `<body>` 元素的末尾。将脚本放在  `<body>` 末尾可以改善显示的速度，因为编译脚本会拖慢显示。

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
<script src="aScript.js"></script>
```

外部脚本和 `<script>` 标签一样，可以放在 `<head>` 或 `<body>` 中。

### 外部 JavaScript 脚本的优势

使用外部脚本文件的优势：

- 分离HTML和代码
- 使 HTML 和 JavaScript 都更易于阅读和维护
- 已缓存的 JavaScript 文件可加速网页的加载

使用多个脚本文件，可以使用多个 `<script>` 标签：

```html
<script src="myScript1.js"></script>
<script src="myScript2.js"></script>
```

### 外部引用

可以通过完整的 URL 或者相对当前网页的路径引用外部脚本：

```html
<script src="https://www.w3school.com.cn/js/myScript1.js"></script>
```
