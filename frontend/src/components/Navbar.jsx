import React from 'react'
import { Link } from 'react-router-dom';

import { SignedIn, UserButton } from '@clerk/clerk-react';

import Logo from '../assets/logo.png';
import NotificationIcon from '../assets/notification.png'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center px-4 sm:px-8 py-3 sm:py-5 bg-white'>
                
                <div className='flex justify-between items-center w-4/5 sm:w-5/6 md:w-4/5 lg:w-3/5 xl:w-2/4 2xl:w-2/5' >
                    
                    <div className='flex items-center'>
                        <img className='w-7 md:w-8 lg:w-9' src={Logo} alt='logo' />
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold hidden sm:block'> &nbsp;EzyEvents </h1>
                    </div>

                    <Link to='/my-events' className='text-sm sm:text-base md:text-lg  bg-slate-100 p-2 rounded-md hover:scale-105 hover:bg-slate-200'> My Events </Link>
                    <Link to='/view-events' className='text-sm sm:text-base md:text-lg bg-slate-100 p-2 rounded-md hover:scale-105 hover:bg-slate-200'> View Events </Link>
                    <Link to='/history' className='text-sm sm:text-base md:text-lg bg-slate-100 p-2 rounded-md hover:scale-105 hover:bg-slate-200'> History </Link>

                </div>

                <div className='flex justify-between items-center' >
                    <h1> <img src={NotificationIcon} className='w-10 mr-2 hover:cursor-pointer hover:scale-105' alt='icon' /> </h1>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>

            </div>
        </>
    )
}

export default Navbar