# Animation in D3

D3 简化了动画处理过程。下面是 D3 中常见的动画相关方法：

|Method|Description|
|---|---|
|`selection.transition()`|为所选的DOM元素添加 transition|
|`transition.duration()`|设置动画时间|
|`transition.ease()`|指定 easing 函数，如 linear, elastic, bounce|
|`transition.delay()`|指定 delay 时间|

## transition()

`d3.selection.transition()` 函数是动画的开始，获得 `transition` 对象，然后就可以应用不同的动画函数到选择的DOM元素。

例如，[颜色转换动画](../sample_code/d3_demos/animation_color.html)

在上例中创建了一个 id 为 'container' 的 `<div>` 元素，在 `<style>` 初始化其尺寸和颜色。然后使用 `transition()` 添加动画，`duration()` 设置动画时间为 1 秒（1000 毫秒），最终效果是背景颜色修改为红色。

也可以提前创建好 `transition`，然后应用该动画到指定DOM元素：

```js
var t = d3.transition()
        .duration(500)

    d3.select("#container")
      .transition(t)
      .style("background-color", "red");
```

## transition.ease

`ease()` 函数指定运行的速度函数，[不同类型的效果](../sample_code/d3_demos/animation_ease.html)。

## transition.delay

`delay()` 函数指定动画的延迟时间，动画在延迟时间过后启动。

[例如](../sample_code/d3_demos/animation_delay.html)

先在 `<body>` 中添加 `svg`，设置大小 500 x 500。然后添加两个矩形，分别放在 (100, 20) 和 (120, 20)，两者高度均为 20px，宽度 10px。

接下来的 `update()` 函数是重点，以动画形式将两个矩形的高度增加到 100px，后一个矩形要延迟 2 秒（`delay(2000)`）。
