# Collections

## Array

JavaScript 数组具有如下特征：

- 可以保存不同类型。
- 数组大小在需要时可以自动增长

### 创建数组

- 使用 `new Array` 创建数组：

```js
var courses = new Array("HTML", "CSS", "JS");
var course = courses[0]; // HTML
courses[1] = "C++"; //Changes the second element
```

- 创建空数组

```js
var courses = new Array();
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
courses[3] = "C++";
```

- 创建空数组，初始化大小

```js
var courses = new Array(3); //
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
```

- 使用 array literal 创建

```js
var courses = ["HTML", "CSS", "JS"];
```

### 访问数组

Attempting to access an index outside of the array,return the value `undefined`.

### 数组属性和方法

- `length`，元素个数

- `concat()`，连接两个数组，创建包含两个数组所有元素的新数组

```js
var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);
```

此时 `courses` 包含C1和C2的所有四个元素。

### Associative Array

Arrays with named indexes (text instead of numbers), called associative arrays, JavaScript does not.

JavaScript 不支持 associative arrays，不过依然可以使用相同的语法，不过此时产生的是 object.

```js
var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]);
//Outputs "46"
```

注意此时 person 是被当做 object 处理，其中 "name" 和 "age" 被看作是其属性。所以：

- 如果需要编号索引，就使用 array
- 如果需要命名属性，就使用 object.
- 如果在 array 中使用 named index,array被重定义为 object。