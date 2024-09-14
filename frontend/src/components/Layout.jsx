import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { SignIn, SignedIn, SignedOut } from '@clerk/clerk-react'

const Layout = () => {
    return (
        <>
            <SignedOut>
                <div className='flex justify-center items-center h-screen'>
                <SignIn />
                </div>
            </SignedOut>
            <SignedIn>
                <div className='bg-slate-800 min-h-screen'>
                    <Navbar />            
                    <Outlet />
                </div>
            </SignedIn>
        </>
    )
}

export default Layout