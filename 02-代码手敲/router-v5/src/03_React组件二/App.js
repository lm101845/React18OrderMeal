import Home from "./components/Home";
import About from "./components/About";
import Student from "./components/Student";
import {Route} from "react-router-dom"
import Menu from "./components/Menu";


function App() {
    return (
        <div className="App">
            <Menu/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            {/*component传组件，不能自定义里面的参数，不够灵活*/}
            {/*<Route path="/student/:id" component={Student}></Route>*/}
            {/*
        render也可以用来指定要挂载的组件
        render需要一个回调函数作为参数，回调函数的返回值会最终被挂载
         render不会自动传递三个属性(match、location、history)
        */}


            {/*<Route path="/student/:id" render={(routeProps)=> {*/}
            {/*    //render传的是JSX,可以传参数，比较灵活，但是那三个属性需要自己指定*/}
            {/*    console.log(routeProps,'routeProps')*/}
            {/*    return <Student {...routeProps}/>*/}
            {/*}}></Route>*/}


            {/*
                children 也可以用来指定被挂载的组件
                    用法有两种：
                        1. 和render类似，传递回调函数
                            - 当children设置一个回调函数时，该组件无论路径是否匹配都会挂载
                        2. 可以传递组件
            */}
            {/*写法1：*/}
            {/*<Route path="/student/:id" children={routeProps => <Student {...routeProps}/>}/>*/}

            <Route path="/student/:id" children={<Student/>}></Route>

            {/*写法2：*/}
            {/*<Route path="/student/:id">*/}
            {/*    <Student {...routeProps}/>*/}
            {/*</Route>*/}
        </div>
    );
}

export default App;
