import React from 'react';
import './Speciality.css'


const Speciality = () => {
    return (
        <div>
            <div
                data-aos="zoom-in-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-center"
                class="flex  justify-center items-center  pt-8 my-10">

                <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                    <div role="main" class="flex flex-col items-center justify-center">
                        <h1 class="lg:text-4xl text-2xl font-bold leading-9 text-center text-black uppercase">Our Speciality</h1>
                        <p class="lg:text-base lg:p-0 px-2 text-xs leading-normal text-center text-gray-600 dark:text-gray mt-4 lg:w-2/3 md:w-10/12 w-11/12">In this guide we will list out the best rides that Busch Gardens Virginia offers, how each one is unique, and actual (point of view) videos of the </p>
                    </div>
                </div>
            </div>

            <div class="grid lg:grid-cols-2 gap-6 px-2 justify-center items-start">
                <div
                    data-aos="zoom-in-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-center"

                >
                    <div class="lg:grid lg:grid-cols-2 gap-3 justify-center">

                        <div className='text-center lg:mb-0 mb-10    bg-gray-500 text-white p-8'>

                            <i class="fas fa-house-user font-bold text-5xl"></i>
                            <h3 className='font-bold text-2xl my-3'>Private Gazebo</h3>
                            <p className=' mx-auto text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                        </div>

                        <div className='text-center  lg:mb-0 mb-10   bg-gray-600 text-white p-8'>

                            <i class="fas fa-utensils font-bold text-5xl"></i>
                            <h3 className='font-bold text-2xl my-3'>Delicious Food</h3>
                            <p className=' mx-auto text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                        </div>

                        <div className='text-center  lg:mb-0 mb-10   bg-gray-700 text-white p-8'>

                            <i class="fas fa-user-lock font-bold text-5xl"></i>
                            <h3 className='font-bold text-2xl my-3'>Safety Lockers</h3>
                            <p className=' mx-auto text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                        </div>

                        <div className='text-center drop-shadow-md bg-gray-800 text-white p-8'>

                            <i class="fas fa-swimming-pool font-bold text-5xl"></i>
                            <h3 className='font-bold text-2xl my-3'>Pool Rides</h3>
                            <p className=' mx-auto text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                        </div>

                        <div className='py-14 col-span-2 px-4   items-bottom font-light mt-10'>
                            <div className='text-xl'>
                                <p className='lg:flex text-2xl font-light my-5 uppercase lg:justify-between '>Our Schedule</p>
                            </div>
                            <div className='lg:text-xl'>
                                <p className='flex justify-between '>Mon - Fri <span className='lg:font-semibold'><i class="fas fa-clock mr-2 text-blue-300"></i>08:00 AM - 16:00 PM</span></p>
                            </div>
                            <hr className='my-3 ' />
                            <div className='lg:text-xl'>
                                <p className='flex justify-between '>Sat - Sun <span className='lg:font-semibold'><i class="fas fa-clock mr-2 text-blue-300"></i>09:00 AM - 17:00 PM</span></p>
                            </div>
                            <hr className='my-3' />
                            <div className='lg:text-xl'>
                                <p className='flex justify-between '>Holiday <span className='lg:font-semibold'><i class="fas fa-clock mr-2 text-blue-300"></i>09:00 AM - 17:00 PM
                                </span></p>
                            </div>
                            <hr className='my-3' />
                        </div>
                    </div>


                </div>


                <div
                    data-aos="zoom-in-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-center"
                    class="">
                    <img src="https://i.ibb.co/hVhzTXH/lily-banse-p-SUBKIUSEAk-unsplash.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Speciality;