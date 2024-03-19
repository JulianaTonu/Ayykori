import { useEffect, useState } from "react";

const Rejected = () => {
 
    const [rejectedData, setRejectedData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/candidates")
        .then(res => res.json())
        .then(data => {
          const rejectedCandidates = data.filter(candidate => candidate.reject === 'rejected');
          setRejectedData(rejectedCandidates);
        })
        .catch(error => {
          console.error('Error fetching candidates:', error);
        });
    }, []);

    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
  
            </thead>
            <tbody>
              {/* row  */}
              {
               rejectedData.map((data) => (
                  <tr key={data.id} >
                    <td>
                      <div className="flex items-center content-between border-2 border-slate-100 gap-3 bg-white p-4 rounded-md w-full">
                        <div className="avatar">
                          <div className="mask mask-circle w-12 h-12">
                            <img src={data.img} alt="pic" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{data.name}</div>
                          <div className="text-sm opacity-50 mt-2">{data.experience} | {data.expected_salary}</div>
                        </div>
  
                        <div className='ml-72'>
                          <h1 className='font-bold text-red-500'>Rejected</h1>
                        </div>
  
                        <div className='ml-32'>
                          <h1 className=' '>{data.date}</h1>
                        </div>
  
  
                      </div>
                    </td>
  
  
  
                  </tr>
                ))
              }
  
  
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Rejected;