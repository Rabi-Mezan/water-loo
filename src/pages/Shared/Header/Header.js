import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/usefirebase';

const Header = () => {
    const { user, logout } = useFirebase()

    return (
        <div className='  '>
            <nav class="bg-white shadow dark:bg-gray-800 sticky top-0 ">
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300 ">


                    <Link to="/home" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 text-xs lg:text-lg sm:mx-2">home</Link>

                    <Link to="/packages" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 text-xs lg:text-lg sm:mx-2">Packages</Link>

                    <Link to="/home" class="lg:visible lg:text-4xl font-bold text-yellow-400 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">WATERLOO</Link>



                    {
                        user.email ?
                            <div class="border-b-2 flex justify-center  items-center border-transparent hover:text-gray-800 dark:hover:text-gray-200 mx-1.5 sm:mx-6">
                                <Link to="/dashboard" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500  mx-1.5 text-xs lg:text-lg sm:mx-2">
                                    Dashboard
                                </Link>

                                <button onClick={logout} className='border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500  mx-1.5 text-xs lg:text-lg sm:mx-2 '>Logout</button>
                            </div>
                            :

                            <div>
                                <Link to="/login" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500  mx-1.5 text-xs lg:text-lg sm:mx-2">
                                    Login
                                </Link>
                                <Link to="/register" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500  mx-1.5 text-xs lg:text-lg sm:mx-2">
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