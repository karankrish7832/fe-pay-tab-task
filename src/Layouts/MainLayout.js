import React from 'react';
import { Navbar } from '../Components/Navbar';
import { Outlet, Link, useLocation } from "react-router-dom";

export const MainLayout = (props) => {
    return (
        <div className="container-fluid p-0">
            <div className="row m-0">
                <div className="col-12 p-0">
                    <Navbar/>
                </div>
                <div className="col-12 children-container p-0">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}