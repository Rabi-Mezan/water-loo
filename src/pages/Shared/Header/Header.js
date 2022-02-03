import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <nav class="bg-white shadow dark:bg-gray-800 ">
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">


                    <Link to="/home" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</Link>

                    <Link to="/packages" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Packages</Link>

                    <Link to="/" class="lg:visible lg:text-4xl font-bold text-yellow-400 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">WATERLOO</Link>



                    <Link to="/login" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                        Login
                    </Link>
                    <Link to="/register" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                        Register
                    </Link>
                </div>
            </nav>

        </div>
    );
};

export default Header;