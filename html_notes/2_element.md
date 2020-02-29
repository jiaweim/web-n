- [input](#input)
  - [type](#type)
  - [placeholder](#placeholder)
- [script](#script)
- [已废弃元素](#%e5%b7%b2%e5%ba%9f%e5%bc%83%e5%85%83%e7%b4%a0)
  - [`<center>`](#center)

# input
HTML `<input>` 元素用于基于 Web 的表单创建交互式控件，以便接受来自用户的数据；可以使用各种类型的输入数据和控件小部件，具体取决于设备和 user agent.

例如：
```html
<label for="name">Name (4 to 8 characters):</label>

<input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10">
```

## type
`<input>` 元素的 `text` 类型创建基础的单行文本框。

## placeholder
提示用户输入框的作用。用于提示的占位符文本不能包含回车或换行。仅适用于当 `type` 属性为 `text`, `search`, `tel`, `url` 或 `email` 时，否则被忽略。

> Note: 请不要用placeholder 属性替换 `<label>` 元素。他们的作用不同:  `<label>` 属性描述表单元素的角色; 也就是说，它展示预期的信息，而 `placeholder` 属性是提示用户内容的输入格式。某些情况下 `placeholder` 属性对用户不可见, 所以当没有它时也需要保证form能被理解。



# script
`<script>` 元素用于定义客户端脚本。
- `<script>` 元素要么包含脚本内容，要么通过 `src` 属性指定外部脚本文件。
- JavaScript 常用于图像处理、表单验证和动态更改内容。
- JavaScript 常通过 `document.getElementById()` 方法获得 HTML 元素。

例如：
```html
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script
```

# 已废弃元素

## `<center>`
HTML Center 元素