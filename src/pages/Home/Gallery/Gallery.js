import React from 'react';

const Gallery = () => {
    return (
        <div>
            <div class=" mx-auto my-14">
                <div class="2xl:mx-auto  lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 full sm:w-auto">
                    <div role="main" class="flex flex-col items-center justify-center">
                        <h1 class="text-4xl font-bold leading-9 text-center text-black uppercase">FEATURED Moments</h1>
                        <p class="text-base leading-normal text-center text-gray-600 dark:text-gray mt-4 lg:w-2/3 md:w-10/12 w-11/12">For nearly one hundred years, Knott's Berry Farm has been drawing fans from all over. What started as a small family farm soon grew into a world famous destination.</p>
                    </div>
                </div>
                <div class="grid-cols-3 p-20 space-y-2 bg-gray-100 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
                    <div class="w-full rounded">
                        <img src="https://i.ibb.co/CH4x6s5/frank-mckenna-Eg-B1u-SU5t-RA-unsplash.jpg"
                            alt="img" />
                    </div>
                    <div class="w-full flex gap-2  col-span-2 row-span-2 rounded">
                        <img src="https://images.unsplash.com/photo-1545960122-23d7d68938a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                            alt="img" />
                        <img src="https://images.unsplash.com/photo-1545960122-23d7d68938a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                            alt="img" />
                    </div>
                    <div class="w-full rounded">
                        <img src="https://i.ibb.co/C6jHTPc/john-labelette-gj-MZh3q-BNKs-unsplash.jpg"
                            alt="img" />
                    </div>
                    <div class="w-full rounded">
                        <img src="https://i.ibb.co/b1HMqfN/katherine-auguste-Dam2cr4-HCUg-unsplash.jpg"
                            alt="img" />
                    </div>
                    <div class="w-full rounded">
                        <img src="https://i.ibb.co/xCqWbB7/jakob-owens-c-L1m55-Gcw-XE-unsplash.jpg"
                            alt="img" />
                    </div>
                    <div class="w-full rounded">
                        <img src="https://i.ibb.co/hgPq0t3/derek-thomson-v-Y86-Rq8cfj-Q-unsplash.jpg"
                            alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;