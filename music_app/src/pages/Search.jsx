import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DataContext } from '../provider/provider';

const Search = () => {
    const { isLoading, setIsLoading } = useContext(DataContext);
    let {searchId} = useParams()
    const navigate = useNavigate()
    const[data , setData] = useState(null)
    useEffect(()=>{
        setIsLoading(true)
       setTimeout(() => {
        fetch(`https://saavn.me/search/songs?query=encodeURIComponent(${searchId})&page=1&limit=2`).then((res)=>{
            res.json().then((data)=>{
                console.log(data);
                setData(data.data)
                setIsLoading(false)
            })
        })
       }, 1000);
    },[])


  return (
    <div className='container'>
        <h1 className='text-5xl font-bold py-10'>Search Song</h1>
        {isLoading && (
          <div className="w-full  flex justify-center items-center mt-48">
            <div className="loader"></div>
          </div>
        )}
       <div className="grid grid-cols-1 sm:grid-cols-5 mt-5 gap-5 text-center">
            {data?.results?.map((item) => (
              <div key={item.id} className="flex flex-col mb-3">
             <div className='flex justify-center'>
             <img
                  src={item?.image[2]?.link}
                  alt=""
                  className="w-[250px] h-[250px] rounded-lg transition duration-300 transform hover:-translate-y-1"
                  onClick={() => {
                    navigate(`/details/${item.id}`);
                  }}
                />
             </div>
                <div className="bg-white p-3 shadow rounded-lg mb-4">
                  <p className="text-gray-600 truncate">{item.primaryArtists}</p>
                  <h2 className="text-lg font-bold mb-2 text-gray-800">
                    {item?.name ? item?.name : "Song is not available"}
                  </h2>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Search
