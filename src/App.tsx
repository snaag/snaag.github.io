import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import Navigation from "./components/Navigation";


function App() {
    return (
        <>
            <Navigation/>
            <div>Hello world</div>
            <Outlet/>
        </>
    );
}

export default App;
