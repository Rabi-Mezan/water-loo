import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <div>
            <div className='mt-0 h-auto py-5 lg:flex flex-col lg:items-strech  lg:justify-center  dark:bg-gray-800  px-4 lg:pt-20'>
                <div className='my-6 lg:flex justify-between items-center'>
                    <Link to="/" class="lg:visible lg:text-4xl font-bold text-yellow-400 dark:hover:text-gray-200 hover:border-blue-500 mb-10 lg:ml-14 lg:px-0 px-6">WATERLOO</Link>
                    <div className='lg:w-1/5 lg:text-2xl text-white flex justify-around items-start flex-col lg:px-0 px-6 my-5'>
                        <h1 className='uppercase'>Follow Us On</h1>
                        <div className='flex justify-around mt-2'>
                            <i class="fab fa-facebook mr-3"></i>
                            <i class="fab fa-twitter mr-3"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className='grid lg:justify-items-start items-center lg:grid-cols-4  grid-cols-2 gap-5 lg:px-16 px-6'>
                    <div className='text-left  pr-4 leading-7'>
                        <h5 className='uppercase text-white font-semibold mb-4'>Links</h5>
                        <p className='text-gray-200'>Gallery</p>
                        <p className='text-gray-200'>Pricing</p>
                        <p className='text-gray-200'>Privacy Policy</p>
                    </div>
                    {/* <div>
                        <h1 class="lg:visible lg:text-4xl font-bold text-yellow-400 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">WATERLOO</h1>
                    </div> */}
                    <div className='text-left    leading-7'>
                        <h5 className='uppercase text-white font-semibold mb-4'>About</h5>
                        <p className='text-gray-200'>Services</p>
                        <p className='text-gray-200'>Newsletter</p>
                        <p className='text-gray-200'>Our Events</p>
                    </div>
                    <div className='text-left  leading-7'>
                        <h5 className='uppercase text-white font-semibold mb-4'>SERVICES</h5>
                        <p className='text-gray-200'>Services</p>
                        <p className='text-gray-200'>Newsletter</p>
                        <p className='text-gray-200'>Our Events</p>
                    </div>
                    <div className='text-left  leading-7'>
                        <h5 className='uppercase text-white font-semibold mb-4'>RESOURCES</h5>
                        <p className='text-gray-200'>Services</p>
                        <p className='text-gray-200'>Newsletter</p>
                        <p className='text-gray-200'>Our Events</p>
                    </div>


                </div>




            </div>
            <div className='dark:bg-gray-800 text-center py-5'>
                <hr />
                <p className='my-3'> <small className='text-yellow-500 text-xs '>WATERLOO © Ravi//{getYear()} . ALL RIGHTS RESERVED.</small></p>
            </div>
        </div>
    );
};

export default Footer;