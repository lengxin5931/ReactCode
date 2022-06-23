### 环境搭建

##### 安装脚手架

```markdown
npm install -g create-react-app
```

##### 查看脚手架版本

```js
create-react-app -V
```

### 初始化项目

##### 创建项目

```js
create-react-app 项目名称
cd 项目目录 
```

##### 暴露配置项

```js
npm run eject
```

##### 降级成17版本

```js
npm install react@17 react-dom@17
```

##### 修改index.js文件

```js
import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(
    <div>Hello React</div>,
    document.getElementById("root")
 );
```

### Api

```jsx
ReactDOM.render() // 把虚拟dom生成真实dom,插入到页面容器中
ReactDOM.render() // 参数：jsx(虚拟dom)、页面容器、回调函数：把虚拟dom生成真实dom插入到页面容器中之后立刻调用
```

### JSX语法

```
可以把jsx称为虚拟dom，但是不能把虚拟dom称为jsx

jsx是js+html的混合语句

jsx语句浏览器不支持 jsx不是合法的js语句，需要通过babel转码，转成合法的js语句

jsx是React.createElement()的语法糖
```

##### 语法规范

```
1. class要写成classNme
2. 只能有一个根节点
3. 标签必须闭合
4. label的for属性要写成htmlFor
5. 通过{}绑定动态数据或者js表达式
6. 自动展开数组,使用有返回值的数组方法
7. style的值要用双花括号{{}}
```

### this.setState()

##### this.setState()的两种写法

```jsx
1.this.setState({})

2.this.setState(()=>{
	return{}
})
```

##### this.setState()的两个参数

```jsx
1. 修改状态
2. 回调函数 
	作用：获取最新状态
	触发：dom更新后触发（状态修改并且视图更新后触发）
```

##### setState()到底是同步还是异步的？

```jsx
setState有的时候同步,有的时候异步,setState本身是同步的，但会有异步的表现形式
在合成事件和生命周期中是异步的
在原生事件和异步中是同步的
```

##### 为什么在合成事件中要把setState设置成异步形式呢？

```
为了性能优化，减少不必要的渲染
在同一个合成事件中，多次执行setState(),多个setState会存放在一个异步队列中，只触发最后一次，只render一次
```

### 通信方式

```
父子传值：在父组件的子组件标签自定义属性，子组件通过props接收，类组件通过this.props， 函数组件通过props接收
子父传值：父组件给子组件传递一个函数，子组件通过props接收并触发，传递参数给父组件
```

