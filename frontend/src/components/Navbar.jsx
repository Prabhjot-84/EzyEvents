import React from 'react'
import { Link } from 'react-router-dom';

import { SignedIn, UserButton } from '@clerk/clerk-react';

import Logo from '../assets/logo.png';
import Add from '../assets/add.png'
import NotificationIcon from '../assets/notification.png'

const Navbar = () => {
    return (
        <>
            <div className='h-[12vh] px-5 pt-5'>
            <div className='flex justify-between items-center inset-0 backdrop-blur-md bg-white/10 border-[1px] border-white/20 rounded-md px-4 sm:px-8 py-3 sm:py-5'>
                
                <div className='flex justify-between items-center w-4/5 sm:w-5/6 md:w-4/5 lg:w-3/5 xl:w-2/4 2xl:w-2/5' >
                    
                    <div className='flex items-center'>
                        <img className='w-7 md:w-8 lg:w-9' src={Logo} alt='logo' />
                        <h1 className='text-lg md:text-xl lg:text-2xl font-semibold hidden sm:block'> &nbsp;EzyEvents </h1>
                    </div>

                    <Link to='/my-events' className='text-sm sm:text-base md:text-lg p-2 hover:scale-105 hover:scale-110 hover:border-b-2'> My Events </Link>
                    <Link to='/view-events' className='text-sm sm:text-base md:text-lg p-2 hover:scale-105 hover:scale-110 hover:border-b-2'> Discover </Link>
                    <Link to='/history' className='text-sm sm:text-base md:text-lg p-2 hover:scale-105 hover:scale-110 hover:border-b-2'> Registered </Link>

                </div>

                <div className='flex justify-between items-center' >
                    <Link to='/create-event' className='flex justify-evenly items-center border-[1px] border-transparent bg-white/20 p-[7px] px-3 mr-4 rounded-sm hover:bg-white/25 hover:scale-[1.01] hover:border-white/30'>
                        <img className='w-8 mr-2' src={Add} alt='add' />
                        <h1 className='text-lg'> Create Event </h1>
                    </Link>
                    <h1 className='bg-white/20 p-[7px] mr-4 rounded-sm border-[1px] border-transparent hover:bg-white/25 hover:scale-[1.01] hover:border-white/30'> <img src={NotificationIcon} className='w-8 hover:cursor-pointer hover:scale-105' alt='icon' /> </h1>
                    <div className='bg-white/20 p-2 pb-1 rounded-sm border-[1px] border-transparent hover:bg-white/25 hover:scale-[1.01] hover:border-white/30'>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>

            </div>
            </div>
        </>
    )
}

export default Navbar