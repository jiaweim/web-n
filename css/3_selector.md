# 选择器

CSS 选择器根据元素的 name, id, class, attribute 查找 HTML 元素。

## element selector

element 选择器根据元素名称选择HTML元素。

如下，以 `<p>` 选择段落，设置 center-aligned, red text color:

```css
p {
    text-align: center;
    color: red;
}
```

## id 选择器

id 选择器使用 HTML 元素的 id 属性选择元素。

id 前加 #，如下选择 id="para1" 的元素：

```css
#para1 {
    text-align: center;
    color: red;
}
```

### class 选择器

class 选择器根据 class 属性选择 HTML 元素。

class 前加点好 `.`。如下选择 class="center" 的元素：

```css
.center {
    text-align: center;
    color: red;
}
```

还可以只选择特定HTML element的 class：

```css
p.center {
    text-align: center;
    color: red;
}
```

一个HTML元素可以有多个 class，如下 `<p>` 元素由 class="center" 和 class="large" 两个 class 选择器：

```css
<p class="center large">This paragraph refers to two classes.</p>
```

## Grouping 选择器

如果多个HTML元素有相同的样式，如下：

```css
h1 {
    text-align: center;
    color: red;
}
h2 {
    text-align: center;
    color: red;
}
p {
    text-align: center;
    color: red;
}
```

此时采用选择器分组，要简洁许多：

```css
h1, h2, p {
    text-align: center;
    color: red;
}
```

## CSS Combinators

组合器（Combinator）可以解释选择器（selector）之间的关系。
