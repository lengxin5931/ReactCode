### 环境搭建

##### 安装脚手架

```jsx
npm install -g create-react-app
```

##### 查看脚手架版本

```jsx
create-react-app -V
```

### 初始化项目

##### 创建项目

```jsx
create-react-app 项目名称
cd 项目目录 
```

##### 暴露配置项

```jsx
npm run eject
```

##### 降级成17版本

```jsx
npm install react@17 react-dom@17
```

##### 修改index.js文件

```jsx
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

```jsx
可以把jsx称为虚拟dom，但是不能把虚拟dom称为jsx

jsx是js+html的混合语句

jsx语句浏览器不支持 jsx不是合法的js语句，需要通过babel转码，转成合法的js语句

jsx是React.createElement()的语法糖
```

##### 语法规范

```jsx
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

```jsx
为了性能优化，减少不必要的渲染
在同一个合成事件中，多次执行setState(),多个setState会存放在一个异步队列中，只触发最后一次，只render一次
```

### 通信方式

```jsx
1.父子传值：在父组件的子组件标签自定义属性，子组件通过props接收，类组件通过this.props， 函数组   件通过props接收

2.子父传值：父组件给子组件传递一个函数，子组件通过props接收并触发，传递参数给父组件

3.上下文传参(context传参)
	1.创建上下文对象
    	上下文对象提供了两个组件
        	Provider:提供者
            Consumer:接收者
```

### React.Fragment

```jsx
<React.Fragment></React.Fragment>
相当于vue中的template 可以包裹标签,但是不占结构
```

### 状态提升

```jsx
将多个平行组件或者跨组件中共享的数据提升到共同的父组件或者祖父组件中进行集中管理
```

### 默认props

```
1.方法一:user.defaultProps = {}
2.方法二:static defaultProps = {}
```

### React 生命周期(旧)

```markdown
(初始化阶段)实例期
     constructor
     UNSAFE_componentWillMount
     render
     componentDidMount

(更新阶段)运行期(存在期)
     UNSAFE_componentWillReceiveProps
     shouldComponentUpdate 控制组件是否更新
     UNSAFE_componentWillUpdate
     render
     componentDidUpdate
              
(销毁阶段)毁期  
     componentWillUnmount  
     
```


### React路由

##### 安装命令

```jsx
npm install react-router-dom@5.0 --force
```

#####  路由提供的组件

```react
BrowserRouter  历史模式
HashRouter  hash模式
Link  跳转的路由组件
NavLink 跳转的有高亮的路由组件 （可以自己指定高亮类名，默认active，指定：activeClassName）
Route 匹配对应路径显示对象路由的路由组件
Redirect 重定向
Switch  匹配唯一路由

import { BrowserRouter,HashRouter，Route，Link，Switch } from "react-router-dom";
// 历史模式：BrowserRouter
// hash模式：HashRouter

<Route path="/home" component={Home}></Route>
// 匹配对应路径显示对象路由的路由组件

<Link to="/home"}>首页</Link>
// 跳转的路由组件

<NavLink to="/home" activeClassName="xxxxx"></NavLink>
// 跳转的有高亮的路由组件 （可以自己指定高亮类名，默认active，指定：activeClassName）

<Route path="/" exact component={Login}></Route>
// exact 精准匹配

<Redirect from="/" exact to="/Login"></Redirect>
// 重定向 

<Switch>
    <Route></Route>
    <Redirect></Redirect>
</Switch>
// 匹配唯一路由
```

#####  路由二级嵌套

```jsx
<Switch>
     <Route path='/home/child1' component={Child1} />
     <Route path='/home/child2' component={Child2} />
     <Redirect from='/home' exact to='/home/child1' />
</Switch>
```

##### 路由匹配规则

1. 包含匹配（模糊匹配） to(地址栏)里包含path的内容

   ​	设置精准匹配  exact

   ​	`
   ​	<Route path='/' exact component={Login}></Route>
   ​	`

   ​	但是嵌套路由中不使用exact，因为嵌套路由会匹配不到

2. 路由从上往下依次匹配，找到匹配的不停止，一直到最后

   ​	用Switch组件包起来Route，设置唯一路由匹配，从上往下依次匹配，找到匹配的，不在往下接着匹配 

##### 路由跳转

```react
// 声明式：<Link></Link> <NavLink></NavLink>
// 编程式：this.props.history.push()
```

 