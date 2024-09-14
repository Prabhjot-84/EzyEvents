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
                <div className='bg-gradient-to-br from-sky-200 to-pink-200 bg-gradient min-h-screen'>
                    <Navbar />            
                    <Outlet />
                </div>
            </SignedIn>
        </>
    )
}

export default Layout