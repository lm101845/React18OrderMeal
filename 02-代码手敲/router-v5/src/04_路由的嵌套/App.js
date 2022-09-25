import Home from "./components/Home";
import About from "./components/About";
import {Route} from "react-router-dom"
import Menu from "./components/Menu";
import Hello from "./components/Hello";


function App() {
    return (
        <div className="App">
            <Menu/>
            <Route exact path="/" component={Home}/>
            <Route path="/about">
                <About/>
                {/*<Route path="/about/hello">*/}
                {/*    <Hello/>*/}
                {/*</Route>*/}
            </Route>
        </div>
    );
}

export default App;
