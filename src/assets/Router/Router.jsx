import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "./MainLayout";
import Home from "../../Components/Home/Home";
import MainLayout from "../../layout/Mainlayout";
import Dashboard from "../../layout/Dashboard";
import Application from "../../Components/Application/Application";
import Dash from "../../Components/Dash/Dash";

export const router =createBrowserRouter([

    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[

            {
                path:'/',
                element:<Home></Home>
            }
        ]
    },

    {
        path:"dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'dash',
                element:<Dash></Dash>
            },
            {
                path:'application',
                element:<Application></Application>
            }
        ]
    }
])