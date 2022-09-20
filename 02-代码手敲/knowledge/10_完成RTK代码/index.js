import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //我们可能指定多个context,但只用指定一个store
    <Provider store={store}>
        <App/>
    </Provider>
);
