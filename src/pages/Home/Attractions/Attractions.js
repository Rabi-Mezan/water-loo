import React from 'react';
import { Link } from 'react-router-dom';

const Attractions = () => {
    return (
        <div>


            <div class="flex bg-gray-100 justify-center items-center pt-14">

                <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                    <div
                        data-aos="zoom-in-down"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-anchor-placement="top-center"

                        role="main" class="flex flex-col items-center justify-center my-10 mb-20">
                        <h1 class="lg:text-4xl text-2xl font-bold leading-9 text-center text-black uppercase">New Attractions</h1>
                        <p class="lg:text-base text-xs leading-normal text-center text-gray-600 dark:text-gray mt-4 lg:w-2/3 md:w-10/12 w-11/12">In this guide we will list out the best rides that Busch Gardens Virginia offers, how each one is unique, and actual (point of view) videos of the </p>
                    </div>
                    <div

                        data-aos="zoom-in-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-anchor-placement="top-center"
                        class="lg:flex items-stretch md:mt-12 mt-8">
                        <div class="lg:w-full">
                            <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                                <div class="sm:w-1/2 lg:mb-0 mb-10  relative">
                                    <div className='opacity-50 hover:opacity-100'>

                                        <div class="absolute bottom-0 left-0 p-6 bg-blue-500 bg-blend-lighten ">
                                            <div className=''>
                                                <h2 class="text-xl font-semibold 5 text-white">Best Pools</h2>
                                                <p class="leading-4 text-white mt-2 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptate?</p>
                                                <Link to="/" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                                    <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                                                    <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="https://i.ibb.co/QX4TjKw/conner-baker-wv4-Pu-Jjdbw-unsplash.jpg" class="w-full" alt="chair" />
                                </div>
                                <div class="sm:w-1/2 relative lg:mb-0 mb-10  ">
                                    <div className='opacity-50 hover:opacity-100'>

                                        <div class="absolute bottom-0 left-0 p-6 bg-blue-500">
                                            <h2 class="text-xl font-semibold 5 text-white">Water Slides</h2>
                                            <p class="text-xs leading-4 text-white mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, aperiam.</p>
                                            <Link to="/" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                                <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                                                <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    <img src="https://i.ibb.co/mGQPcpp/iker-urteaga-GIXUMw8wsoc-unsplash.jpghttps://i.ibb.co/mGQPcpp/iker-urteaga-GIXUMw8wsoc-unsplash.jpg" class="w-full" alt="chair" />
                                </div>
                                <div class="sm:w-1/2 relative">
                                    <div className='opacity-50 hover:opacity-100'>

                                        <div class="absolute bottom-0 left-0 p-6 bg-blue-500 ">
                                            <h2 class="text-xl font-semibold 5 text-white">World Class Rides</h2>
                                            <p class="text-xs leading-4 text-white mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, minus.</p>
                                            <Link to="/" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                                <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                                                <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    <img src="https://i.ibb.co/tXhzTRL/jaee-kim-e2-Vve-ZKIZy-Q-unsplash.jpg" class="w-full" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attractions;