#### 环境搭建

###### 安装脚手架

```markdown
npm install -g create-react-app
```

###### 查看脚手架版本

```js
create-react-app -V
```

#### 初始化项目

###### 创建项目

```js
create-react-app 项目名称
cd 项目目录 
```

###### 暴露配置项

```js
npm run eject
```

###### 降级成17版本

```js
npm install react@17 react-dom@17
```

###### 修改index.js文件

```js
import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(
    <div>Hello React</div>,
    document.getElementById("root")
 );
```

