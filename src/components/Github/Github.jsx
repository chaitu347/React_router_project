import React from "react"
import {Link,NavLink, useLoaderData} from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import {useLoader} from "react"

function Github() {
  const[data,setData] = useState("")
  useEffect((()=>{
    fetch("https://api.github.com/users/chaitu347")
    .then(response =>response.json())
    .then(data =>{
      setData(data)
    })
  }),[])

  // const data = useLoaderData()



  return (
    <div className="bg-gray-400 text-2xl text-center">
      
      Github followers :{data.followers}

      <img className="w-90 p-3 m-5 item-center" src={data.avatar_url} alt="My profile picture"  />
      
    </div>
  )
}

export default Github


// export const Gitinfoprovider =async()=>{
//       const response = await fetch("https://api.github.com/users/chaitu347")
//       return response.json()
// }