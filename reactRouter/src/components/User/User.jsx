import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
  return (
    <div className='bg-gray-300'>
        <p className='text-red-600 p-3 text-4xl text-center'>User: {userid}</p>
    </div>
  )
}

export default User