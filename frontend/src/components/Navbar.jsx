import React from 'react'
import { Link } from 'react-router-dom';

import { SignedIn, UserButton } from '@clerk/clerk-react';

import Logo from '../assets/logo.png';
import NotificationIcon from '../assets/notification.png'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center px-8 py-5 bg-white'>
                
                <div className='flex justify-between items-center w-2/5' >
                    
                    <div className='flex items-center'>
                        <img className='w-9' src={Logo} alt='logo' />
                        <h1 className='text-3xl font-bold'> &nbsp;EzyEvents </h1>
                    </div>

                    <Link to='/my-events' className='text-xl bg-slate-100 p-2 rounded-md hover:scale-105 hover:bg-slate-200'> My Events </Link>
                    <Link to='/view-events' className='text-xl bg-slate-100 p-2 rounded-md hover:scale-105 hover:bg-slate-200'> View Events </Link>
                    <Link to='/history' className='text-xl bg-slate-100 p-2 rounded-md hover:scale-105 hover:bg-slate-200'> History </Link>

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