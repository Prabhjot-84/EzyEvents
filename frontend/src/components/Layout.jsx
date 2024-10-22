import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { SignIn, SignedIn, SignedOut, useUser } from '@clerk/clerk-react';
import BackgroundImg from '../assets/b-i2.jpg';
import axios from 'axios';

const Layout = () => {
    const { user } = useUser(); // useUser hook from Clerk to access authenticated user's data

    useEffect(() => {
        const checkAndCreateUser = async () => {
            if (user) {
                const userId = user.id;
                const userName = user.firstName + " " + user.lastName;

                try {
                    // Make a POST request to the backend to check and add the user if needed
                    await axios.post('/api/users/check-user', {
                        userId: userId,
                        userName: userName
                    });
                } catch (error) {
                    console.error('Cliend error :', error);
                }
            }
        };

        checkAndCreateUser();
    }, [user]); // This will run when `user` changes (after user signs in)

    return (
        <>
            <SignedOut>
                <div className='flex justify-center items-center h-screen'>
                    <SignIn />
                </div>
            </SignedOut>
            <SignedIn>
                <div className='min-h-screen text-white bg-no-repeat bg-cover' style={{ backgroundImage: `url(${BackgroundImg})` }}>
                    <Navbar />
                    <Outlet />
                </div>
            </SignedIn>
        </>
    );
};

export default Layout;
