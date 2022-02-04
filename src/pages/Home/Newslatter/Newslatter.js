import React from 'react';

const Newslatter = () => {
    return (
        <div>

            <div class="2xl:mx-auto 2xl:container mx-4 py-16">
                <div class="w-full relative flex items-center justify-center">
                    <img className='' src="https://images.unsplash.com/photo-1508162252424-e8ad5ef02539?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="dining" class="w-full h-full absolute z-0 hidden xl:block" />
                    <img src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png" alt="dining" class="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
                    <img src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png" alt="dining" class="w-full h-full absolute z-0 sm:hidden" />
                    <div class="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                        <h1 class="text-4xl font-semibold leading-9 text-white text-center">Don’t miss out!</h1>
                        <p class="text-base leading-normal text-center text-white mt-6">
                            Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in <br />
                            a week on every friday so subscribe to get latest news and updates.
                        </p>
                        <div class="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                            <input class="border rounded  border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
                            <button class="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75 transition duration-150 ease-out ">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newslatter;