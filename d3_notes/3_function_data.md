# Function of Data

在 DOM 操作中，包括 `append()`, `style()`, `text()` 等。这些方法可以接受常数值或函数作为参数。作为参数的函数称为数据函数。

例如：

```js
.text(function(d) {
    return d;
});
```

在该函数中，可以应用各种数据操作，[例如](../sample_code/d3_demos/function_data.html)。

效果

![function data](images/2020-03-02-16-20-48.png)

在上例中，参数 `d` 为数据元素，`i` 为数据索引，`this` 引用当前 DOM 元素，此处对应 `<p>` 元素。

## Dynamic Properties

函数数据功能提供了动态设置属性的能力。

例如：[按照 `<p>` 的内容设置颜色](../sample_code/d3_demos/function_data_dynamic.html)

效果：

![dynamic properties](images/2020-03-02-16-48-23.png)

`d3.selectAll("p")` 选择所有 `<p>` 元素，`.style()` 根据函数的返回值设置文本的颜色。

