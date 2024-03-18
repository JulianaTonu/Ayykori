import searchicon from './../../assets/Images/search.png'
import filtericon from './../../assets/Images/filter.png'
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

            <div role="tablist" className="tabs tabs-bordered mt-5 bg-white">
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="All" />
  <div role="tabpanel" className="tab-content p-10">Tab content 1</div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Shortlisted" checked />
  <div role="tabpanel" className="tab-content p-10">Shortlisted</div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="In process" />
  <div role="tabpanel" className="tab-content p-10">In Process</div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="On Hold" />
  <div role="tabpanel" className="tab-content p-10">On hold</div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Rejected" />
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