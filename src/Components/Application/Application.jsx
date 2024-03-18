import searchicon from './../../assets/Images/search.png'
import filtericon from './../../assets/Images/filter.png'

import pic from './../../assets/Images/pic.png'
import AllCandidates from './AllCandidates';


const Application = () => {
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

            <div role="tablist" className="tabs tabs-bordered py-3 mb-4  mt-5 bg-white">
  <input type="radio" name="my_tabs_1" role="tab" className="tab font-bold " aria-label="All"  />
  <div role="tabpanel" className="tab-content p-10 bg-[#e0edea]">
    
   <div>
 
    <AllCandidates/>
   </div>
    
    </div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab font-bold" aria-label="Shortlisted" checked />
  <div role="tabpanel" className="tab-content p-10">

  <div>
   <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
     
    </thead>
    <tbody>
      {/* row  */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={pic} alt="pic" />
              </div>
            </div>
            <div>
              <div className="font-bold">Markas ilab</div>
              <div className="text-sm opacity-50">4 year exp. | Expected 45k</div>
            </div>
            <td className='ml-16 font-bold'>Shortlisted</td>
          </div>
          
        </td>
       
        
        <td>12/03/24</td>
        
        
    </tr>
    </tbody> 
  </table>
</div>
    
   </div>
  </div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab font-bold" aria-label="In process" />
  <div role="tabpanel" className="tab-content p-10">In Process</div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab font-bold" aria-label="On Hold" />
  <div role="tabpanel" className="tab-content p-10">On hold</div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab font-bold" aria-label="Rejected" />
  <div role="tabpanel" className="tab-content p-10">Rejected</div>
  








  <div className="flex items-end content-end ml-96 font-bold">
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