'use client'

import { Button } from '@chakra-ui/react'
import React from 'react'
import ModalDelete from './ModalDelete';
import ModalEdit from './ModalEdit';

const Hero = ({data}) => {
    const dateString = data?.updatedAt;
    const date = new Date(dateString); 
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options)
  return (
    <div className='border-t-[4px] border-sky-500 border-[1px] p-2 md:w-[450px] md:h-[300px] w-[350px] h-[400px] transition-all rounded-xl'>
        <div className='flex flex-col gap-2 justify-between h-full'>
            <div>
            <h1 className='font-bold'>{data?.title}</h1>
            <p className='text-[12px] italic font-extralight'>Updated : {formattedDate}</p>
            <p className={`text-[13px] px-2 mt-2 text-justify`}>{data?.description}</p>
            </div>
            <div className='flex items-center justify-between'>
                <ModalEdit item={data}/>
                <ModalDelete data ={data}/>
            </div>
        </div>
    </div>
  )
}

export default Hero