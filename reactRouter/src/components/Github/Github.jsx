import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/suvraghosh')
        .then(res => res.json())
        .then((data)=>{
            console.log("Data: ", data);
            setData(data)
        })
    },[])
  return (
    <div className='text-center text-white bg-gray-700 p-4 m-1 text-3xl'>
        <p className=''>GitHub Followers: {data.followers}</p>
        <img className='rounded' src={data.avatar_url} alt="Avatar" />
    </div>
  )
}

export default Github