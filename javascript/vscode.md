### jsconfig.json

`jsconfig.json` 文件：

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6"
  },
  "exclude": ["node_modules"]
}
```

这是个简单的 `jsconfig.json` 文件模板，将 JavaScript `target` 定义为 `ES6`，`exclude` 属性表示排除 `nodu_modules` 目录。

还可以用 `include` 属性指定包含的文件，如果 `include` 未指定，默认包含当前目录和子目录的所有文件。当指定 `include` 目录，则仅包含 `include` 指定的文件。例：

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6"
  },
  "include": ["src/**/*"]
}
```

最好方式是，用 `include` 属性包含单个 `src` 目录。

> `exclude` 和 `include` 都是相对 `jsconfig.json` 位置定义的相对位置。


## 迁移到 TypeScript

要迁移到 TypeScript，将 `jsconfig.json` 重命名为 `tsconfig.json`，将 `allowJs` 为 `true`。

> 除了包含 `allowJs` 属性设置外，`tsconfig.json` 和 `jsconfig.json` 文件是一样的。
