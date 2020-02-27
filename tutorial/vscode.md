
# VS Code JavaScript

- [VS Code JavaScript](#vs-code-javascript)
  - [JavaScript 项目](#javascript-%e9%a1%b9%e7%9b%ae)
    - [jsconfig.json](#jsconfigjson)
  - [Snippets](#snippets)
  - [JSDoc](#jsdoc)
  - [迁移到 TypeScript](#%e8%bf%81%e7%a7%bb%e5%88%b0-typescript)
  - [Using tasks](#using-tasks)
    - [使用 TypeScript 编译器](#%e4%bd%bf%e7%94%a8-typescript-%e7%bc%96%e8%af%91%e5%99%a8)

## JavaScript 项目

VS Code 使用 `jsconfig.json` 文件定义 JavaScript 项目，该文件所在目录为 JavaScript 项目根目录。常规设置不需要 `jsconfig.json` 文件，下面情况必需：

- 排除部分文件，不需要所有文件出现在 IntelliSense 中。
- 将工作空间中的部分文件作为单个项目。当处理使用隐式全局依赖的遗留代码很有用。
- 工作空间中包含多个项目，如果前端和后端 JavaScript 代码，此时需要在每个项目的根目录添加一个 `jsconfig.json` 文件。
- 使用 TypeScript 编译器向下编译 JavaScript 代码。

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


> 要检查 JavaScript 文件是否在 JavaScript 项目中，在 VSCode 中打开该文件，调用命令 "JavaScript: Go to Project Configuration"。如果该命令打开了 `jsconfig.json` 文件，说明该文件在项目中。



## Snippets

VS Code 包含了许多基本的 JavaScript snippets。

设置 `editor.snippetSugestions` 为 "none" 可以禁用 snippets 提示。

## JSDoc


## 迁移到 TypeScript

要迁移到 TypeScript，将 `jsconfig.json` 重命名为 `tsconfig.json`，将 `allowJs` 为 `true`。

> 除了包含 `allowJs` 属性设置外，`tsconfig.json` 和 `jsconfig.json` 文件是一样的。

## Using tasks

### 使用 TypeScript 编译器

TypeScript 的主要功能之一是能使用最新的 JavaScript 语言功能。