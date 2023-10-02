import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css'

const Gallery = () => {
    return (
        <div>
            <div class=" mx-auto my-14">
                <div
                    class="2xl:mx-auto  lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 full sm:w-auto">
                    <div

                        role="main" class="flex flex-col items-center justify-center">
                        <h1 class="lg:text-4xl text-xl font-bold leading-9 text-center text-black uppercase">FEATURED Moments</h1>
                        <p class="lg:text-base text-xs leading-normal text-center text-gray-600 dark:text-gray mt-4 lg:w-2/3 md:w-10/12 w-11/12">For nearly one hundred years, Knott's Berry Farm has been drawing fans from all over. What started as a small family farm soon grew into a world famous destination.</p>
                    </div>
                </div>
                <div class=" mx-auto px-5 py-2 lg:px-20 lg:pt-24">
                    <div class="-m-1 flex flex-wrap md:-m-2">
                        <div class="flex w-1/2 flex-wrap">
                            <div class="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/JccdcNX/kevin-kyle-santiago-Cy-I2xrquvwk-unsplash.jpg" />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/b1HMqfN/katherine-auguste-Dam2cr4-HCUg-unsplash.jpg" />
                            </div>
                            <div class="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/hgPq0t3/derek-thomson-v-Y86-Rq8cfj-Q-unsplash.jpg" />
                            </div>
                        </div>
                        <div class="flex w-1/2 flex-wrap">
                            <div class="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/HdJtt93/allgo-an-app-for-plus-size-people-FJHau-GTPt-Po-unsplash.jpg" />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/xCqWbB7/jakob-owens-c-L1m55-Gcw-XE-unsplash.jpg" />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://i.ibb.co/h7Fg230/wells-baum-QUHvd8-BBZPU-unsplash.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallery;