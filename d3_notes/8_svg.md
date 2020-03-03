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

