import React from 'react';

import {Route, Routes} from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import MainMenu from "./components/MainMenu";


function App() {
   return (
       <div>
            <MainMenu/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}></Route>
                <Route path={"/profile"} element={<ProfilePage/>}></Route>
            </Routes>
       </div>
   )
}

export default App;
