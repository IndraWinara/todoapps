'use client'

import Hero from '@/components/Hero'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
const [data,setData] = useState()

const getAllData = async ()=>{
  const response = await fetch('/api/topic',{method : "GET",headers : {accept : 'application/json'}})
  const ress = await response.json()
  return ress.data
}

useEffect(()=>{
  getAllData().then((ress)=> setData(ress))
},[])
  

  return (
   <div className='flex flex-col justify-center items-center h-full mt-[80px] mb-[40px] gap-3 mx-auto'>
    {data?.map((item,index)=>(
      <div key={index} >
        <Hero data={item} />
      </div>
    ))}
   
   </div>
  )
}
