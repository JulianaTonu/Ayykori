import searchicon from './../../assets/Images/search.png'
import filtericon from './../../assets/Images/filter.png'
import AllCandidates from './AllCandidates';
import Shortlisted from './Shortlisted';
import { useEffect, useState } from 'react';
import Rejected from './Rejected';


const Application = () => {

    const [allData, setAllData] =useState([])

    useEffect(() => {
        fetch("https://ayykori-server-side.vercel.app/candidates")
            .then(res => res.json())
            .then(data => {
                setAllData(data)
            })
    }, [])
   

    //shotlisted

    const [shortlistedData, setShortlistedData] = useState([]);

    useEffect(() => {
      fetch("https://ayykori-server-side.vercel.app/candidates")
        .then(res => res.json())
        .then(data => {
          const shortlistedCandidates = data.filter(candidate => candidate.type === 'shortlisted');
          setShortlistedData(shortlistedCandidates);
        })
        .catch(error => {
          console.error('Error fetching candidates:', error);
        });
    }, []);

    return (
        <div className="pl-5 p-3 bg-[#e0edea] min-h-full">
            <h1 className="font-bold font-mono  text-2xl mt-8">Application</h1>
            <h3 className="font-semibold font-mono mt-4 mb-2">On Going Recruitment</h3>

            <select className="select shadow-sm bg-[#b9f2e5] w-72 font-semibold max-w-xs">
                <option selected>Jr.UI/UX Designer</option>
                <option>MERN Stack Developer</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
            </select>

            <div role="tablist" className="tabs tabs-bordered py-3   mt-5 bg-white">
                <input type="radio" name="my_tabs_1" role="tab" className="tab font-bold  " aria-label={`All (${allData.length})`}/>
                <div role="tabpanel" className="tab-content p-10 bg-[#e0edea]">
                    <AllCandidates 
                    allData={allData}
                    ></AllCandidates>
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab font-bold" aria-label={`Shortlisted (${shortlistedData.length})`} checked />
                <div role="tabpanel" className="tab-content p-10 bg-[#e0edea]">
                    <Shortlisted 
                    shortlistedData={shortlistedData}
                    ></Shortlisted>
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab font-bold" aria-label="In process" />
                <div role="tabpanel" className="tab-content p-10">In Process</div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab font-bold" aria-label="OnHold" />
                <div role="tabpanel" className="tab-content p-10">On hold</div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab font-bold" aria-label="Rejected" />
                <div role="tabpanel" className="tab-content p-10">
                    <Rejected/>
                </div>









                <div className="flex items-end content-end ml-80 font-bold">
                    <div className='flex items-center '> <img src={searchicon} className='w-4 h-4' alt="" />
                        <h1 className="px-2 ">Search</h1></div>
                    <div className='flex items-center px-2'> <img src={filtericon} className='w-4 h-4' alt="" />
                        <h1 className="px-2">Filter</h1></div>

                </div>
            </div>
        </div>
    );
};

export default Application;