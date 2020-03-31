# Draggable

## Introduction

通过 `draggable` 属性设置，任何 HTML 元素可以 dragable。

HTML5 drag and drop API 是事件驱动。

```html
<!DOCTYPE HTML>
<html>
   <head>
   <script>
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
   </script>
   </head>
<body>

   <div id="box" ondrop="drop(event)"
   ondragover="allowDrop(event)"
   style="border:1px solid black; 
   width:200px; height:200px"></div>

   <img id="image" src="sample.jpg" draggable="true"
   ondragstart="drag(event)" width="150" height="50" alt="" />

</body>
</html>
```

## drag

当拖动元素，`ondragstart` 属性指定调用的函数，上例中调用 `drag(event)` 方法。