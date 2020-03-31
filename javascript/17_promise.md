# Promise

`Promise` 是表示异步操作结果（完成或失败）的对象。

由于大部分人使用创建好的 promises，所以我们首先解释如何使用 promises。

本质上，promises 是绑定 `callback` 的对象，

假设有函数 `createAudioFileAsync()` 以给定配置和两个 `callback` 函数参数异步生成一个音频文件，如果创建成功，就调用其中一个 `callback` 函数，如果创建失败，就调用另外一个 `callback` 函数。

下面是使用 `createAudioFileAsync()` 的代码：

```js
function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.error("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
```

如果 `createAudioFileAsync()` 方法返回一个 promise，上面的调用方法可以写为：

```js
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

其实就是下面的简写形式：

```js
const promise = createAudioFileAsync(audioSettings);
promise.then(successCallback, failureCallback);
```

这种方法称为异步函数调用，其优点有许多。可以确保：

- 在 JavaScript 当前事件循环完成前，不会调用 `callback`。
- 通过 `then()` 添加的 `callbacks` 在运行完后可以保证被调用。
- 可以通过多次调用 `then()` 添加多个 `callbacks`。`callbacks`按照被添加的顺序依次执行。

## Chaining

我们通常需要执行两个或多个异步操作，后续操作根据上一步执行的结果接着执行。通过 promise chain 可实现。

`then()` 函数返回一个新的 promise：

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

或者：

```js
const promise2 = doSomething().then(successCallback, failureCallback);
```

每个 promise 都是上一个异步操作的结果。

在 ES6 之前，执行多个异步操作会出现难看的回调金字塔：

```js
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

而用 promise chain 要清晰许多：

```js
doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```

其中 `then` 的参数是可选的，`catch(failureCallback)` 是 `then(null, failureCallback)` 的缩写。还可以用 arrow functions 进一步简写：

```js
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```

### Chaining after a catch

在 failure，如 `catch` 语句后可以继续链接，用在失败后继续执行某些操作很有用。如：

```js
new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');

    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});
```

输出：

```console
Initial
Do that
Do this, no matter what happened before
```

## Error propagation

在回调金字塔中有三次调用 `failureCallback`，而在 promise 链中只有一次：

```js
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => console.log(`Got the final result: ${finalResult}`))
.catch(failureCallback);
```

如果有异常，浏览器会向下寻找 `.catch()` 或 `onRejected`。

这和下面同步代码的模型类似:

```js
try {
  const result = syncDoSomething();
  const newResult = syncDoSomethingElse(result);
  const finalResult = syncDoThirdThing(newResult);
  console.log(`Got the final result: ${finalResult}`);
} catch(error) {
  failureCallback(error);
}
```

在 ES2017 中还引入了具有相同功能的 `async/await` 语法糖：

```js
async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch(error) {
    failureCallback(error);
  }
}
```

## rejection events

## Promises

Promise 相对 `setTimeout()` 类型的方法，是一种更好的异步编程的方式。

例如：

```js
setTimeout(function() {
  console.log("Work 1");
  setTimeout(function() {
    console.log("Work 2");
  }, 1000);
}, 1000);
console.log("End");
```

按顺序输出 "End", "Work 1", "Work 2"（异步执行）。如果时间更多，代码就变得十分复杂。

ES6 通过 Promise 解决该问题。promise 创建方式：

```js
new Promise(function(resolve, reject) {
    // Work
    if (success)
        resolve(result);
    else
        reject(Error("failure"));
});
```

如果一个方法返回 promise，其调用使用包含连个输入方法的 `then` 方法，一个用于成功，一个用于失败。例如：

```js
function asyncFunc(work) {
  return new Promise(function(resolve, reject) {
    if (work === "")
      reject(Error("Nothing"));
    setTimeout(function() {
      resolve(work);
    }, 1000);
  });
}

asyncFunc("Work 1") // Task 1
    .then(function(result) {
        console.log(result);
        return asyncFunc("Work 2"); // Task 2
    }, function(error) {
        console.log(error);
    })
    .then(function(result) {
        console.log(result);
    }, function(error) {
        console.log(error);
    });
console.log("End");
```
