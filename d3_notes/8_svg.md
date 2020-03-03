# Create SVG Elements using D3

## What is SVG

- SVG 是基于文本的图片
- SVG 结构类似 HTML
- SVG 位于 DOM
- SVG properties 可以通过 attributes 指定

例如，下面是一个矩形图片：

```html
<svg width="500" height="500">
    <rect x="0" y="0" width="200" height="200"></rect>
</svg>
```

这里可以将 `<svg>` 标签看作一个画板，需要指定其大小（宽度，高度）。

然后在其中添加 SVG 元素，如 `<rect>`, `<line>`, `<circle>`, `<text>` 等。

## Line

SVG 线条用 `<line>` 标签创建。例如：

```html
<line x1="100" y1="100" x2="500" y2="100" />
```

(x1, y1) 和 (x2, y2) 分别对应线段的起点和终点。

下面创建一条线段：[起点(100, 50)，终点(500, 50)](../sample_code/d3_demos/svg_line.html)。

下面[用代码绘制相同的线](../sample_code/d3_demos/svg_line_js.html)。

## Rectangle

矩形用 `<rect>` 定义。

```html
<rect x="0" y="0" width="200" height="200"></rect>
```

[例如](../sample_code/d3_demos/svg_rect.html)

## Text

`<text>` 用于定义文本。

例如：

```html
<svg width="500" height="500">
    <text x="250" y="25">Your text here</text>
</svg>
```

在[椭圆上添加文本](../sample_code/d3_demos/svg_text.html)

`<g>` 用于将多个 SVG 元素合并在一起，这里将椭圆和文本合在一起。

## SVG 元素样式

|属性|说明|
|---|---|