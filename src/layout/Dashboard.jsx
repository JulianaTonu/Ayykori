import { NavLink, Outlet } from "react-router-dom";
import applogo from '../assets/Images/applogo.png'
import dslogo from '../assets/Images/dslogo.png'
import cdarlogo from '../assets/Images/cdar.png'
const Dashboard = () => {
    return (
        <div className="flex"> 
            {/* Side Bar */}
            
            <div className="w-64 min-h-full p-2  border-2 my-2">
                <h1 className="text-md ml-3 mb-2 font-bold">Menu</h1>
                <ul className="">
                    <li className=" my-1  border-2 bg-white  py-4 px-2 rounded-lg">
                    <NavLink to='/dashboard/dash' className='flex content-between items-center'>
                        <img className=" mx-2 mr-3"  src={dslogo} alt="" />
                        <h1 className="font-bold">Dashboard</h1>
                        </NavLink>
                        </li>
                    <li className=" my-1  border-2 bg-teal-600  py-4 px-2 rounded-lg">
                    <NavLink to='/dashboard/application' className='flex content-between items-center'>
                        <img className=" mx-2 mr-3 "  src={applogo} alt="" />
                        <h1 className="font-bold">Application</h1>
                        </NavLink>
                        </li>
                    <li className=" my-1  border-2 bg-white  py-4 px-2 rounded-full">
                    <NavLink to='/dashboard/calender' className='flex content-between items-center'>
                        <img className=" mx-2 mr-3"  src={cdarlogo} alt="" />
                        <h1 className="font-bold">Calender</h1>
                        </NavLink>
                        </li>

                  
                </ul>
            </div>
            {/* //dashboard content  */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;