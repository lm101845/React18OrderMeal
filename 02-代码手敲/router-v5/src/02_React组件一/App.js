
import Home from "./components/Home";
import About from "./components/About";
import Student from "./components/Student";
import { Route } from "react-router-dom"
import Menu from "./components/Menu";


function App() {
  return (
    <div className="App">
        <Menu/>
      {/*App组件*/}
        {/*将路由与组件进行映射*/}
        {/*
        将路由和组件进行映射
            使用Route来映射地址和组件
                属性：
                    path 映射的url地址
                    component 要挂载的组件
                    exact 路径是否完整匹配，默认值false

            当Route的路径被访问，其对应组件就会自动挂载
              注意 默认情况下Route并不是严格匹配
                只要url地址的头部和path一致，组件就会挂载，不会检查子路径
        */}
        <Route exact path="/" component={Home}/>
        <Route  path="/about" component={About}/>
        <Route path="/student/:id" component={Student}></Route>
    </div>
  );
}

export default App;
