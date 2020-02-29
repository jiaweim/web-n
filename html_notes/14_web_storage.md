# HTML5 Web Storage

## Introduction

通过 HTML5 Web 存储可以将数据存储在用户本地电脑上，而在 HTML5 之前，必须借助 JavaScript cookie 才能实现。

Web 存储的优势：

- 更安全。
- 更快。
- 可以存储更多数据。
- 存储的数据不会随每个服务器请求发送。

Web 存储对象有两种：

- sessionStorage()，关闭浏览器后数据删除
- localStorage()，数据一直保存

## API 操作

Web 存储的 local 和 session 存储都十分简单。数据以键值对的形式保存。

- 保存值

```js
localStorage.setItem("key1", "value1");
```

- 获取值

```js
//this will print the value
alert(localStorage.getItem("key1")); 
```

- 删除值

```js
localStorage.removeItem("key1");
```

- 清空

```js
localStorage.clear();
```

session 存储的语法完全相同。只需将 `localStorage` 替换为 `sessionStorage`。
