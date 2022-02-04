import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/usefirebase';

const Header = () => {
    const { user, logout } = useFirebase()

    return (
        <div className=''>
            <nav class="bg-white shadow dark:bg-gray-800 ">
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">


                    <Link to="/home" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</Link>

                    <Link to="/packages" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Packages</Link>

                    <Link to="/" class="lg:visible lg:text-4xl font-bold text-yellow-400 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">WATERLOO</Link>



                    {
                        user.email ?
                            <div class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 mx-1.5 sm:mx-6">
                                {user.displayName}    <button onClick={logout} className='bg-gray-400 text-black px-4 py-1 font-bold rounded-lg ml-5'>Logout</button>
                            </div>
                            :

                            <div>
                                <Link to="/login" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                                    Login
                                </Link>
                                <Link to="/register" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                                    Register
                                </Link>
                            </div>
                    }
                </div>
            </nav>

        </div>
    );
};

export default Header;