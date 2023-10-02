import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Newslatter = () => {
    return (
        <div className=''>

            <div class=" w-full  lg:mt-20 ">
                <div class="w-full relative flex items-center justify-center">
                    <div
                        class="bg-gray-800 rounded bg-opacity-100 md:mt-16 lg:py-20 pt-20 w-full  md:px-12 px-4 flex flex-col items-center justify-center relative z-40 ">
                        <h1 class="text-4xl font-semibold leading-9 text-white text-center uppercase">Don’t miss out!</h1>
                        <p class="lg:text-base text-xs leading-normal text-center text-white mt-6">
                            Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in <br />
                            a week on every friday so subscribe to get latest news and updates.
                        </p>
                        <div class="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0 lg:pb-0 pb-20">
                            <input class="border rounded  border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
                            <button class="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto  bg-white py-4 px-6 hover:bg-opacity-75 transition duration-150 ease-out  ">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newslatter;