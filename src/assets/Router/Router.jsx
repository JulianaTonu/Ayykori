import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "./MainLayout";
import Home from "../../Components/Home/Home";
import MainLayout from "../../layout/Mainlayout";
// import Home from "./Home";

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
    }
])