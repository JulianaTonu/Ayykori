
const Shortlisted = ({shortlistedData}) => {
 


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
              shortlistedData.map((data) => (
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
                        <h1 className='font-bold text-green-500'>Shortlisted</h1>
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

export default Shortlisted;