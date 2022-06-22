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

#### Api

```jsx
ReactDOM.render() // 把虚拟dom生成真实dom,插入到页面容器中
ReactDOM.render() // 参数：jsx(虚拟dom)、页面容器、回调函数：把虚拟dom生成真实dom插入到页面容器中之后立刻调用
```



#### JSX语法

可以把jsx称为虚拟dom，但是不能把虚拟dom称为jsx

jsx是js+html的混合语句

jsx语句浏览器不支持 jsx不是合法的js语句，需要通过babel转码，转成合法的js语句

jsx是React.createElement()的语法糖

###### 语法规范

1. class要写成classNme
2. 只能有一个根节点
3. 标签必须闭合
4. label的for属性要写成htmlFor
5. 通过{}绑定动态数据或者js表达式
6. 自动展开数组,使用有返回值的数组方法
7. style的值要用双花括号{{}}

#### this.setState()

###### setState()的两种写法

```jsx
1.this.setState({})

2.this.setState(()=>{
	return{}
})
```

###### setState()的两个参数

1. 修改状态
2. 回调函数 作用：获取最新状态

