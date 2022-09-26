import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import {Route,Routes} from "react-router-dom";
import Menu from "./components/Menu";

function App() {
   return (
       <div>
           <h1>App</h1>
           <Menu/>
           {/*
                Routes v6 中新增加的组件
                    作用和Switch类似，都是用于Route的容器
                    Routes中Route只有一个会被匹配
                v6中，Route的component render children都变了
                    需要通过element来指定要挂载的组件
            */}
           <Routes>
               <Route path="/" element={<Home/>}></Route>
               <Route path="about" element={<About/>}></Route>
                {/*6中可以省略斜杠，它会自动给你补*/}
           </Routes>

       </div>
   )
}

export default App;
