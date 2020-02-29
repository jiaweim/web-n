- [Intro](#intro)
- [input](#input)
- [Input Types](#input-types)
  - [Text](#text)
  - [Password](#password)
  - [Button](#button)
# Intro
HTML `<form>` 元素用于定义收集用户输入的表单。格式如下：
```html
<form>
.
form elements
.
</form>
```

HTML 表单包含一系列的表单元素。

# input
`<input>` 元素是表单最重要的元素。

`<input>` 元素可以以多种方式显示，取决于 `type` 属性。

# Input Types
HTML input 的不同类型：
```html
<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">
```

## Text
`<input type="text">` 定义单行文本输入字段：
```html
<form>
  First name:<br>
  <input type="text" name="firstname"><br>
  Last name:<br>
  <input type="text" name="lastname">
</form>
```
其效果如下：

![](images/2019-11-04-08-55-53.png)

## Password
`<input type="password">` 定义密码字段。

例：
```html
<form>
  User name:<br>
  <input type="text" name="username"><br>
  User password:<br>
  <input type="password" name="psw">
</form>
```
效果：

![](images/2019-11-04-08-57-38.png)

密码字段中的字符被屏蔽，以星号或圆圈显示。

## Button
`<input type="button">` 定义按钮。
例：
```html
<input type="button" onclick="alert('Hello World!')" value="Click Me!">
```
效果：

![](images/2019-11-04-09-00-19.png)