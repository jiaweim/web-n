# Image

## 简介

`<img>` 标签用于插入图片。它只包含属性，不包含关闭标签。

可以通过 `src` 属性指定图片的位置。例如：

```html
<img src="image.jpg" />
```

`alt` 属性可以指定一个备用文本。当图片无法显示，备用文本用于描述图片内容。`alt` 属性是必须的。

## 图片大小

使用 `width` 和 `height` 属性指定大小。可以使用 `pixel` 或 `percentage` 值：

```html
<html>
   <head>
      <title>first page</title>
   </head>
   <body>
      <img src="tree.jpg" height="150px" width="150px" alt="" />
      <!-- or -->
      <img src="tree.jpg" height="50%" width="50%" alt="" />
   </body>
</html>
```

载入图片需要使用，使用很大的图片会拖慢网页的速度，所以要小心使用。

## 边框

图片默认没有边框，使用 `border` 属性可以创建图片边框：

```html
<img src="tree.jpg" height="150px" width="150px" border="1px" alt="" />
```

