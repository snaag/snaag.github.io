import React from 'react';
import './styles/App.css';
import {Outlet} from "react-router-dom";
import Navigation from "./components/Navigation";


function App() {
    return (
        <>
            <Navigation/>
            <div className="p-5 md:pr-20 md:pl-20 md:pt-10 md:pd-10">
                <Outlet/>
            </div>
        </>
    );
}

export default App;
