# Object

## Objects and properties

A property of an object can be explained as a variable that is attached to the object.

访问 object 属性的方法有两种：

```js
objectName.propertyName
//or
objectName['propertyName']
```

## Object Methods

An object method is a property that contains a function definition.

调用 object 方法：

```js
objectName.methodName()
```

定义方法语法：

```js
methodName = function() { code lines }
```

方法定义在 constructor 中，如定义一个 `changeName` 方法用于修改名称：

```js
function person(name, age) {
  this.name = name;  
  this.age = age;
  this.changeName = function (name) {
    this.name = name;
  }
}
```

然后就可以该方法：

```js

var p = new person("David", 21);
p.changeName("John");
//Now p.name equals to "John"
```

## Object Constructor

The standard way to create an "object type" is to use an object constructor function.

```js
function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}
```

创建对象：

```js
function person (name, age) {
  this.name = name;
  this.age = age;
}
var John = new person("John", 25);
var James = new person("James", 21);
```

Use the object literal or initializer syntax to create single objects:

```js
var John = {name: "John", age: 25};
var James = {name: "James", age: 21};
```

## Methods

Method 定义在构造函数外，如：

```js
function person(name, age) {
  this.name= name;  
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2016 - this.age;
}
```

构造函数中是外部方法的引用，调用：

```js
var p = new person("A", 22);
document.write(p.yearOfBirth());
// Outputs 1994
```

注意使用构造函数中的属性名而非外面定义的函数名称。