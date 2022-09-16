 import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//设置移动端的适配
//100除以几，视口的宽度就是多少rem，此时我们设置视口的总宽度为750rem
document.documentElement.style.fontSize = 100 / 750 + 'vw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App/>
  // </React.StrictMode>
 // 严格模式点击按钮会调用2次加，所以我们关掉严格模式
);

