# SVG

## Circle

```html
<svg width="2000" height="2000">
   <circle cx="80" cy="80" r="50" fill="green" />
</svg>
```

属性：

- cx, center x 坐标
- cy, center y 坐标
- r, radius
- fill, fill color
- storke, outline

## Rectangle

```html
<svg width="2000" height="2000">
   <rect width="300" height="100"
     x="20" y="20" fill="green" />
</svg>
```

## Line

```html
<svg width="400" height="410">
    <line x1="10" y1="10" x2="200" y2="100"
        style="stroke:#000000; stroke-linecap:round;
        stroke-width:20"  />
</svg
```

属性：

- `(x1, y1)` 定义起点位置
- `(x2, y2)` 定义终点位置

## Polyline

```html
<svg width="2000" height="500">
    <polyline style="stroke-linejoin:miter; stroke:black;
        stroke-width:12; fill: none;"
        points="100 100, 150 150, 200 100" />
</svg>
```

属性：

- `points`，定义多边形各个顶点的坐标。

## ellipse

近似 `<circle>`，但是可以通过 `rx` 和 `ry` 分别修改水平和垂直的半径。

```html
<svg height="500" width="1000">
   <ellipse cx="200" cy="100" rx="150" ry="70" style="fill:green" />
</svg>
```

## Polygon

`<polygon>` 用于创建至少包含三边的形状。在最后自动封闭形状。

```html
<svg width="2000" height="2000">
<polygon points="100 100, 200 200, 300 0"
      style="fill: green; stroke:black;" />
</svg>
```

## animation

SVG 动画可以通过 `<animate>` 元素创建。

下面创建一个矩形，3秒改变一次位置，再重复两次。

```html
<svg width="1000" height="250">
<rect width="150" height="150" fill="orange">
  <animate attributeName="x" from="0" to="300"
    dur="3s" fill="freeze" repeatCount="2"/>
</rect>
</svg>
```

属性：

- `attributeName`，指定被动画修改的属性。
- `from`，指定属性的起始值。
- `to`，指定属性的终值。
- `dur`，动画运行时间。
- `fill`，动画结束后是否充值属性值，"remove"重置值，"freeze" 在保持值。
- `repeatCount`，动画重复次数。

将 `repeatCount` 设置为 `indefinite` 表示无穷重复。

## Paths

`<path>` 用于定义路径。可用于绘制复杂的图形。

可用命令：

- M: moveto
- L: lineto
- H: horizontal lineto
- V: vertical lineto
- C: curveto
- S: smooth curveto
- Q: quadratic Bézier curve
- T: smooth quadratic Bézier curveto
- A: elliptical Arc
- Z: closepath

也可以使用小写字符：

- 大写，绝对位置
- 小写，相对位置。

通过 `d` 属性设置 path:

```html
<svg width="500" height="500">
<path d="M 0 0 L200 200 L200 0 Z" style="stroke:#000;  fill:none;" />
</svg>
```

