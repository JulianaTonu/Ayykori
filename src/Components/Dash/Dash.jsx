import { useEffect, useState } from 'react';
import { Bar, BarChart } from 'recharts';
// import { BarChart, Bar } from 'recharts';

const Dash = () => {


    const [allData, setAllData] = useState([])

    useEffect(() => {
        fetch("https://ayykori-server-side.vercel.app/candidates")
            .then(res => res.json())
            .then(data => {
                setAllData(data)
            })
    }, [])

    return (
        <div>
            <div className="flex  mx-auto w-full justify-between">
                <h1 className="text-3xl font-semibold p-4">Good Morning</h1>
                <input type="text" placeholder="Search" className="mt-2 items-end input input-bordered file-input-success w-full max-w-xs" />
            </div>

            <div className='lg:flex'>


                <div className=' lg:w-4/5 '>
                    <div className="flex mx-2 my-4 justify-around">
                        <div className="  shadow-md w-52 p-2 justify-between border-t-2 border-yellow-500">
                            <h1 className="font-semibold text-lg ">Total Candidates</h1>
                            <div className='flex justify-between'>
                                <div className=''>
                                    <h2 className="text-2xl font-bold pt-4">361</h2>
                                    <h3 className="text-xs mt-2 text-yellow-500">+26% inc</h3>
                                </div>
                                <div className="radial-progress text-xs text-yellow-500 mt-5" style={{ "--value": 70, "--size": "3rem", "--thickness": "3px" }} role="progressbar">+74%</div>
                            </div>
                        </div>
                        <div className="  shadow-md w-52 p-2 justify-between border-t-2 border-green-500">
                            <h1 className="font-semibold text-lg ">Shortlisted Candidates</h1>
                            <div className='flex justify-between'>
                                <div className=''>
                                    <h2 className="text-2xl font-bold pt-4">361</h2>
                                    <h3 className="text-xs mt-2 text-green-600">+26% inc</h3>
                                </div>
                                <div className="radial-progress text-xs text-green-600 mt-5" style={{ "--value": 70, "--size": "3rem", "--thickness": "3px" }} role="progressbar">+74%</div>
                            </div>
                        </div>
                        <div className="  shadow-md w-52 p-2 justify-between border-t-2 border-blue-500">
                            <h1 className="font-semibold text-lg ">Rejected Candidates</h1>
                            <div className='flex justify-between'>
                                <div className=''>
                                    <h2 className="text-2xl font-bold pt-4">361</h2>
                                    <h3 className="text-xs mt-2 text-blue-600">+26% inc</h3>
                                </div>
                                <div className="radial-progress text-xs text-blue-600 mt-5" style={{ "--value": 70, "--size": "3rem", "--thickness": "3px" }} role="progressbar">+74%</div>
                            </div>
                        </div>

                        {/* <div className="flex shadow-md w-72 p-2 justify-between border-t-2  border-yellow-500">
                    <div> <h1 className="font-semibold ">Shortlisted Candidates</h1>
                        <h2 className="text-2xl font-bold">301</h2>
                        <h3 className="text-xs mt-2 text-amber-400">+45% inc</h3></div>
                    <div className="radial-progress text-amber-400 " style={{ "--value": 70 }} role="progressbar">+74%</div>
                </div>
                <div className="flex shadow-md w-72 border-t-2 border-orange-500 p-2 justify-between">
                    <div> <h1 className="font-semibold ">Rejected Candidates</h1>
                        <h2 className="text-2xl font-bold">160</h2>
                        <h3 className="text-xs mt-2 text-orange-600">+04% Dec</h3></div>
                    <div className="radial-progress text-orange-600 " style={{ "--value": 70 }} role="progressbar">+74%</div>
                </div> */}
                    </div>
                </div>
                {/* //create job  */}
                <div className='w-full lg:w-1/3 border-s-4 border-double  border-[#11998e]  text-center'>
                    <div className='p-4 '>
                        <h1 className='font-bold text-2xl'>Welcome Back XTZ</h1>
                        <button className='btn btn-ghost mt-4 bg-[#11998e] text-white'>+ Create a new job</button>
                    </div>

                    <div className='text-start p-2'>
                        <h2 className='font-semibold my-2'>Recent Added Jobs</h2>

                        <div className='flex p-2 rounded-md bg-[#b9f2e5] my-2'>
                            <div className='p-4 bg-[#11998e] me-2 text-white font-mono'> 23</div>
                            <div className='text-sm '>
                                <h3 className='font-semibold text-base'>Product Designer</h3>
                                <h3>Total Application</h3>
                            </div>
                        </div>
                        <div className='flex p-2 rounded-md bg-[#b9f2e5] my-2'>
                            <div className='p-4 bg-[#11998e] me-2 text-white font-mono'> 23</div>
                            <div className='text-sm '>
                                <h3 className='font-semibold text-base'>Product Designer</h3>
                                <h3>Total Application</h3>
                            </div>
                        </div>
                        <div className='flex p-2 rounded-md bg-[#b9f2e5] my-2'>
                            <div className='p-4 bg-[#11998e] me-2 text-white font-mono'> 23</div>
                            <div className='text-sm '>
                                <h3 className='font-semibold text-base'>Product Designer</h3>
                                <h3>Total Application</h3>
                            </div>
                        </div>
                        <div className='flex p-2 rounded-md bg-[#b9f2e5] my-2'>
                            <div className='p-4 bg-[#11998e] me-2 text-white font-mono'> 23</div>
                            <div className='text-sm '>
                                <h3 className='font-semibold text-base'>Product Designer</h3>
                                <h3>Total Application</h3>
                            </div>
                        </div>
                        <div className='flex p-2 rounded-md bg-[#b9f2e5] my-2'>
                            <div className='p-4 bg-[#11998e] me-2 text-white font-mono'> 23</div>
                            <div className='text-sm '>
                                <h3 className='font-semibold text-base'>Product Designer</h3>
                                <h3>Total Application</h3>
                            </div>
                        </div>
                        <div className='flex p-2 rounded-md bg-[#b9f2e5] my-2'>
                            <div className='p-4 bg-[#11998e] me-2 text-white font-mono'> 23</div>
                            <div className='text-sm '>
                                <h3 className='font-semibold text-base'>Product Designer</h3>
                                <h3>Total Application</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Dash;