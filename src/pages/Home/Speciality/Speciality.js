import React from 'react';
import './Speciality.css'
import homeicon from '../../../img/house.png'

const Speciality = () => {
    return (
        <div>
            <div class="flex  justify-center items-center pt-8">

                <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                    <div role="main" class="flex flex-col items-center justify-center">
                        <h1 class="text-4xl font-bold leading-9 text-center text-black uppercase">Our Speciality</h1>
                        <p class="text-base leading-normal text-center text-gray-600 dark:text-gray mt-4 lg:w-2/3 md:w-10/12 w-11/12">In this guide we will list out the best rides that Busch Gardens Virginia offers, how each one is unique, and actual (point of view) videos of the </p>
                    </div>
                </div>
            </div>

            <div class="grid lg:grid-cols-2 gap-6 lg:ml-20 justify-center items-start">
                <div>
                    <div class="grid lg:grid-cols-2 gap-3 justify-center">

                        <div className='text-center  bg-gray-500 text-white p-8'>

                            <i class="fas fa-house-user font-bold text-5xl"></i>
                            <h3 className='font-bold text-2xl my-3'>Private Gazebo</h3>
                            <p className=' mx-auto text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                        </div>

                        <div className='text-center  bg-gray-600 text-white p-8'>

                            <i class="fas fa-utensils font-bold text-5xl"></i>
                            <h3 className='font-bold text-2xl my-3'>Delicious Food</h3>
                            <p className=' mx-auto text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                        </div>

                        <div className='text-center  bg-gray-700 text-white p-8'>

                            <i class="fas fa-user-lock font-bold text-5xl"></i>
                            <h3 className='font-bold text-2xl my-3'>Safety Lockers</h3>
                            <p className=' mx-auto text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                        </div>

                        <div className='text-center drop-shadow-md bg-gray-800 text-white p-8'>

                            <i class="fas fa-swimming-pool font-bold text-5xl"></i>
                            <h3 className='font-bold text-2xl my-3'>Pool Rides</h3>
                            <p className=' mx-auto text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                        </div>
                        <h1 class="text-4xl mt-28 mb-4 font-bold leading-9 text-left text-black uppercase">Our Schedule</h1>
                        <div className='py-10 col-span-2 px-4  bg-gray-200 items-bottom'>
                            <div className='text-xl'>
                                <p className='flex justify-between '>Monday - Friday <span className='font-semibold'><i class="fas fa-clock mr-2 text-blue-500"></i>08:00 AM - 16:00 PM</span></p>
                            </div>
                            <hr className='my-3' />
                            <div className='text-xl'>
                                <p className='flex justify-between '>Saturday - Sunday <span className='font-semibold'><i class="fas fa-clock mr-2 text-blue-500"></i>09:00 AM - 17:00 PM</span></p>
                            </div>
                            <hr className='my-3' />
                            <div className='text-xl'>
                                <p className='flex justify-between '>Holiday <span className='font-semibold'><i class="fas fa-clock mr-2 text-blue-500"></i>09:00 AM - 17:00 PM
                                </span></p>
                            </div>
                            <hr className='my-3' />
                        </div>
                    </div>


                </div>


                <div class="">
                    <img src="https://i.ibb.co/hVhzTXH/lily-banse-p-SUBKIUSEAk-unsplash.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Speciality;