import React, { useState } from 'react';

const AllCandidates = ({ allData }) => {
  const [shortlistedIds, setShortlistedIds] = useState([]);

  const handleShortlist = id => {
    fetch(`https://ayykori-server-side.vercel.app/candidates/type/${id}`, {
      method: 'PUT',
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        setShortlistedIds([...shortlistedIds, id]); // Add the shortlisted candidate id to the state
        alert('Successfully Shortlisted');
      } else {
        alert('Failed to Shortlist');
      }
    })
    .catch(error => {
      console.error('Error shortlisting candidate:', error);
      alert('Failed to Shortlist');
    });
  }

  const isShortlisted = id => {
    return shortlistedIds.includes(id);
  }
  
 
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            {/* Header content if any */}
          </thead>
          <tbody>
            {allData.map(data => (
              <tr key={data.id}>
                <td>
                  <div className={`flex items-center content-between border-2 border-slate-100 gap-3 bg-white p-4 rounded-md w-full ${isShortlisted(data.id) ? 'bg-green-100' : ''}`}>
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
{
             !data.type && <button onClick={() => handleShortlist(data._id)} className='btn btn-sm badge badge-outline bg-blue-500 my-2 ml-4 mr-2 px-5 text-white' >{isShortlisted(data.id) ? 'Shortlisted' : 'Shortlist'}</button>

}

                    </div>
                   
                    {
               data.type && <button className='btn btn-sm badge badge-outline bg-green-500 my-2  mr-2 text-white'>Shortlisted</button>
            }

{
  !data.type &&  <button  className='btn btn-sm badge badge-outline bg-red-500 my-5 ml-4 mr-2 text-white'>Reject</button>

}                    
{
  data.type &&  <button  className='btn btn-sm badge badge-outline bg-slate-300 my-5 ml-4 mr-2 text-white disabled'>Reject</button>

}                    {/* <div className='ml-24'>
                    </div> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCandidates;
