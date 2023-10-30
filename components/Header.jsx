'use client'

import Image from 'next/image'
import React from 'react'
import ModalCreate from './ModalCreate'

const Header = () => {
    
    return (
        <div className='fixed px-2 top-0 z-10 w-full h-[70px] bg-slate-600 flex items-center justify-between'>
            <div className='flex items-center gap-1'>
                <div className='bg-white w-fit h-fit rounded-full'>
                    <Image src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/3244252/nextjs-icon-md.png' width={40} height={40} alt='logo' />
                </div>
                <h1 className='font-bold text-white'>ext's Todo Apps</h1>
            </div>
            <ModalCreate/>
        </div>
    )
}

export default Header