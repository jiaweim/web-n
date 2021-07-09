# NPM

- [NPM](#npm)
  - [简介](#简介)
  - [安装](#安装)
  - [版本](#版本)
    - [npm 版本](#npm-版本)
    - [Node 版本](#node-版本)
    - [使用 Node.js 版本控制](#使用-nodejs-版本控制)

2021-05-28, 12:17
***

## 简介

npm 使得 JavaScript 代码的共享和重用更容易，是世界上最大的软件注册中心。

npm 包含三部分：

- the website
- the Command Line Interface (CLI)
- the registry

使用 [website](https://www.npmjs.com/) 发现软件包，设置个人信息。

[CLI](https://docs.npmjs.com/cli/npm) 是使用 npm 的命令行工具。

[registry](https://docs.npmjs.com/misc/registry) 是一个大型的 JavaScript 软件数据库。

npm 的应用场景：

- 使用工具包。
- 使用 `npx` 不用下载就可以运行工具包
- 和其它 npm 用户共享代码
- 将代码显著共享给指定开发者
- 。。。


## 安装

npm 和 Node.js 一起分发，所以 Node.js 就会自动安装 npm。

检查是否安装 Node.js，打开命令行运行：

```cmd
node -v
```

检查 npm 是否安装：

```cmd
npm -v
```

## 版本

### npm 版本

npm 是一个独立的项目，其更新频率比 Node.js 更高。更新 npm：

```cmd
npm install npm@latest -g
```

### Node 版本

Node.js 有许多版本。为了有效的使用 Node.js 和 npm，建议使用 Node.js 团队支持的版本，通常是 LTS 版本。

### 使用 Node.js 版本控制

软件一直在改变，因此使用版本控制器管理版本更方便，我们建议在 Node.js 中安装版本控制器。有好几个不错的版本控制器：

- NVM
- nodist
- n
- nave
