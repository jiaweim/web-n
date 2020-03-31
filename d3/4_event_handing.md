# Event Handling

## Events

D3 支持内置事件和自定义事件。使用 `d3.selection.on()` 方法可以将事件监听器绑定到 DOM 元素。语法：

```js
d3.selection.on(type[, listener[, capture]]);
```

`on()` 方法添加事件监听器到选择的所有DOM元素。

- 第一个参数是事件类型字符串，如 `click`, `mouseover`等。
- 第二个参数是一个回调函数，在事件发生时执行。
- 第三个参数为 capture flag。

下面是一些重要的事件处理方法：

|Event Methods|Description|
|---|---|
|`selection.on()`|添加或移除指定类型事件的事件监听器到DOM元素|
|`selection.dispatch()`|捕获事件|
|`d3.event`|事件对象，用来访问标准事件字段|
|`d3.mouse(container)`|获得指定 DOM 元素中当前鼠标位置的坐标|
|`d3.touch()`|获得容器坐标|

例如，[处理 `mouseover` 和 `mouseout` 事件](../sample_code/d3_demos/event_handle.html)

在上面创建了一个 `<div>` 元素，在`<head>`中设置其默认颜色为 `steelblue`。然后使用 `selection.on('mouseover', func)`捕获 `mouseover` 事件，在鼠标落到 `<div>` 上时，修改其颜色，并输出事件信息和鼠标位置；使用 `selection.on('mouseout'), func` 捕获`mouseout` 事件，在鼠标移开时，恢复颜色到 `steelblue`。

