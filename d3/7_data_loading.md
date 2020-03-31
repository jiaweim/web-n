# Data Loading in D3

D3 可以处理多种类型的文件。包括：

|Method|Description|
|---|---|
|d3.csv()|发送 http 请求到指定 url 加载 CSV文件，并根据csv数据对象执行回调函数|
|d3.json()|解析 json 文件|
|d3.tsv()|解析 tsv 文件|
|d3.xml()|解析 xml 文件|

## 服务器

浏览器基于安全考虑禁止读取本地文件，因此要本地开发，需要运行本地网络服务器，而不是 `file://...`。推荐使用 Node 的 [http-server](https://www.npmjs.com/package/http-server)。

安装：

```cmd
npm install http-server g
```

`http-server` 是一个简单的零配置命令行 http 服务器。它足够用于生产、测试、本年底开发和学习。

### 使用

```cmd
http-server [path] [options]
```

`[path]` 默认为 `./public`，如果该文件夹不存在，则为 `./`。

服务器地址 [http://localhost:8080/](http://localhost:8080/)

> 缓存默认开始，使用 `-c-1` 选项可以禁用缓存

### 可用选项

`-p`, `--port`,端口，默认 8080

`-a`, 地址，默认 0.0.0.0

`-d` 显示目录列表，默认 `true`

## d3.csv()

使用 `d3.csv()` 方法载入 csv 文件或 csv 数据：

```js
d3.csv(url[, row, callback]);
```

参数：

- url, csv 文件 url，或返回 csv 数据的 webapi、webservice。
- row, 转换函数，可用于改变数据形似。
- callback，回调函数，在数据载入候执行。

以 "employee.csv" 文件为例：

```csv
Name, Age
John, 30
Jane,32
```

[在控制台输出CSV内容](../sample_code/d3_demos/data_csv.html)。

