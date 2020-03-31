# Data Binding

数据绑定是将数据和DOM元素绑定，基于数据创建新的SOM元素。

D3 包含如下重要的数据绑定方法。

| Method  | Description                                                         |
| ------- | ------------------------------------------------------------------- |
| data()  | 将数据和选择的元素绑定                                              |
| enter() | 创建引用缺失元素的带占位符selection                                 |
| exit()  | 删除节点并将其添加到 exit selection，该 selection 随后可以从DOM移除 |
| datum() | 将数据注入选择的元素                                                |

## data()

`data()` 函数将数据数组和选择的所有DOM元素绑定，返回更新后的 selection。D3 可以处理不同类型的数据，包括 `Array`, `CSV`, `TSV`, `JSON`, `XML` 等。

可以将数据数组或 function of data 传递给 `data()` 函数。

例如：

- [绑定一个数据](../sample_code/d3_demos/data_p.html)。

段落原有内容是`<p>D3 Tutorial</p>`。后面创建了一个简单的数组 `myData = ['Hello World!']`，并将其和 `<p>` 绑定，由于只有一个 `<p>`，所以 `data()` 函数选择数组的第一个值和 `<p>` 绑定。

`.text(func)` 将数据作为选择 `<p>` 的文本，替换了段落原有的 "D3 Tutorial"。

- [数组绑定多个元素](../sample_code/d3_demos/data_p3.html)。

在该例中，HTML 包含三个 `<p>` 元素，数组 `myData` 也包含三个数据。所以 `data()` 将三个数据和三个选择的 `<p>` 元素绑定，`text()` 将绑定的数据设置为段落文本。

- [数组比元素多](../sample_code/d3_demos/data_pd3.html)

在该例中，数组长度为5，而元素只有一个，此时 `select()` 选择数组的第一个元素，其余数据被忽略。

## enter()

`data()` 方法在数据和元素个数不匹配时不好用，该方法适合于更新已有的DOM元素。

`enter()` 方法根据数据创建相同数目的引用占位符，其输出提供给 `append()` 方法创建数据对应的 DOM 元素，适合根据数据创建DOM元素。

例如

- [根据数据创建 `<div>`](../sample_code/d3_demos/enter_t1.html)

说明：

- `.select('body')` 选择 HTML body
- `.selectAll('span')` 选择所有 `<span>`，此时没有，所以是空数组
- `.data(data)` 接收数组数据，数组长度为5，所以后面的代码根据每个数组数据各运行依次。
- `.enter()` 为5个数据检查 `<span>`，由于没有找到任何 `<span>`，所以为每个数据创建 `<span>`。
- `.append('span')` 将上面创建的 `<span>` 添加到 `<body>`。
- `.text(...)` 将数据转换为文本，设置为 `<span>` 内容。

根据数据的奇偶设置样式：

- [创建并设置样式](../sample_code/d3_demos/enter_t2.html)

偶数颜色设置为绿色，字体 20px；奇数颜色红色，字体 16px。

再展示一个将函数作为 `data()` 参数的[例子](../sample_code/d3_demos/enter_t3.html)。

## exit()

和 `enter()` 相反，`exit()` 用于移除元素。

例如，[删除所有 `<p>`](../sample_code/d3_demos/exit_t1.html)

HTML 文件中包含三个 `<p>` 元素，但是数组是有一个元素，剩下的两个元素被 `.exit().remove()` 移除。

## datum()

`datum()` 应用于静态可视化，数据直接和元素绑定。

[例如](../sample_code/d3_demos/datum_1.html)
