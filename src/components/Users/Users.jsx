import React from 'react'
import {useParams} from 'react-router-dom'

function Users() {

  const {userid} = useParams()
  return (
    <div>
      <h1 className='p-10 m-10  text-center text-red-700 text-3xl '>users:{userid}</h1>
    </div>
  )
}

export default Users
