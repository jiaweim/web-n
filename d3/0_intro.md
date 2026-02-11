# d3

2021-05-28, 12:29
***

## 简介

D3（Data-Driven Documents, D3.js）是免费、开源的 JavaScript 库，用于数据可视化。使用 `HTML`, `CSS` 和 `Canvas` 展示数据。D3 将强大的可视化和交互技术与数据驱动的 DOM 操作相结合，提供了强大的动画和交互能力。

D3 的强大，也意味着需要学习的东西非常多，D3 有 30 多个模块一千多种方法，相对其它可视化工具，使用起来也更繁琐。

## D3 是一个底层工具

D3 严格上来说不是一个传统的图表库，它本身没有图表的概念。当你使用 D3 可视化数据时，实际是在组合运行各种图元（primitives）。

例如，绘制一个 stack-area-chart，需要：

- 使用 CSV-parser 加载数据
- 使用 time-scale 确定水平位置（x 轴）
- 使用 linear-scale 确定垂直位置（y 轴）
- 使用 ordinal-scale 和 categorical-scheme 确定颜色
- 使用 stack-layout 安排数值
- 使用带 linear-curve 的 area-shape 生成 SVG path 数据
- 使用 axes 标准位置
- 使用 selection 创建 SVG 元素

D3 的每个组件都可以独立使用，可以逐个学习，再把它们组合起来。D3 包含 30 多个独立模块。

## D3 很灵活

D3 没有提供 chart 的抽象，所以哪怕最基础的 chart，也可能需要写几十行代码。但换个角度看，好处是所有零件都摆在面前，我们能够掌握每个细节。可以随心所欲定制可视化效果，实现想要的任何构想。D3 不会对你的数据呈现任何默认样式，屏幕上显示的，只有你自己的代码。

所以 D3 可以看作从零开始造轮子的替代方案，而不是那种高级 chart 库。如果你对现有的工具都不满意，正打算亲自上手，用 SVG、Canvas 甚至 WebGL 来打造属于自己的 chart，那么 D3 适合你。

## D3 用于 Web

D3 没有引入一套全新的图形表示，而是直接操作 SVG和 Canvas 等网页标准。

D3 是 data-driven documents 的缩写，其中 documents 指网页的  DOM 模型。虽然 D3 有些模块会直接操作 DOM，但其它模块（如 scales 和 shapes）只是操作数据。此外，D3 还可以与 React、Vue 和 Svelte 等 Web 框架搭配使用。



## 参考

- https://d3js.org/what-is-d3