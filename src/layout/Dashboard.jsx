import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex"> 
            {/* <h1>this is Dashboard</h1> */}
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu">
                    <li><NavLink to='/dashboard/application'>Application</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;