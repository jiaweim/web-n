# 简介

CSS 用于描述 HTML 文档样式的标记语言。CSS定义：

- CSS指层叠样式表(Cascading Style Sheets)；
- CSS 用于定义如何显示HTML元素；
- 样式保存在样式表中；
- 样式表实现了内容与表现的分离；
- 外部样式表保存在CSS文件中；

层叠（cadcading）表示 CSS 以堆叠的形式应用样式。

CSS 用于定义HTML文档的布局，颜色，字体，边框，高度，宽度，背景图像等。
即，HTML用于提供结构化内容，CSS用于格式化结构化内容。

## 设置 CSS

CSS 配置有三种方式：

- External style sheet
- Internal style sheet
- Inline style

### External Style Sheet

外部 CSS 文件通过 `<link>` 指定，如：

```html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

### Internal style sheet

用于单个HTML文件，在 `<head>` 部分 `<style>` 元素内定义：

```html
<head>
<style>
body {
    background-color: linen;
}
h1 {
    color: maroon;
    margin-left: 40px;
}
</style>
</head>
```

### Inline Styles

Inline style 应用于单个 HTML 元素。如下：

```html
<h1 style="color:blue;margin-left:30px;">This is a heading</h1>
```

Inline styles 失去了样式和内容分离的优点，所以应当少使用。

## 多个样式表

当有多个样式表定义，如同时定义 external style sheet 和 internal style sheet，则根据定义顺序，对相同值的定义，后面定义的覆盖前面的。
