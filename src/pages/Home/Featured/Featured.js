import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Featured.css'




const Featured = () => {

    const [attractions, setattrActions] = useState([])


    useEffect(() => {

        fetch('https://waterloo-server.vercel.app/packages')

            .then(res => res.json())
            .then(data => setattrActions(data))
    }, [])




    return (
        <div>
            <div

                class="flex mt-10  justify-center items-center pt-8 my-10">

                <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4  sm:w-auto">
                    <div role="main" class="flex flex-col items-center justify-center">
                        <h1 class="lg:text-4xl text-2xl font-bold leading-9 text-center text-black uppercase">Popular Packages</h1>
                        <p class="lg:text-base text-xs leading-normal text-center text-gray-600 dark:text-gray mt-4 lg:w-2/3 md:w-10/12 w-full">For nearly one hundred years, Knott's Berry Farm has been drawing fans from all over. What started as a small family farm soon grew into a world famous destination.</p>
                    </div>
                </div>


            </div>

            {
                attractions?.slice(0, 5).map(item =>
                    <div

                        class="flex lg:justify-start justify-center   bg-blue-lightest">
                        <div id="app" class="bg-white lg:w-full p-5 lg:mx-14 my-6 lg:p-2 h-70 rounded  lg:flex card text-grey-darkest">
                            <img class="lg:w-96 lg:h-full rounded-l-sm" src={item.img} alt="img" />
                            <div class="w-full flex flex-col my-0">
                                <div class="p-4 pb-0 flex-1">
                                    <h3 class="font-light text-3xl uppercase mb-2 text-grey-darkest">{item.title}</h3>
                                    <div class="flex items-center mt-1">
                                        <div class="lg:pr-2 lg:my-1 text-xs my-8 lg:w-2/3">
                                            {item.description.slice(0, 300)}
                                        </div>

                                    </div>
                                    <span class="text-5xl mt-0 text-grey-darkest">£{item.fair}<span class="text-lg">/PP</span></span>

                                </div>

                                <div className='button lg:w-full'>
                                    <Link to={`/details/${item._id}`} className="bg-gray-100 hover:bg-gray-500 lg:ml-3 ml-5 p-3  hover:text-white flex items-center justify-between transition hover:bg-grey-light uppercase">
                                        See Details
                                        <i class="fas fa-chevron-right ml-5"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>

    );
};

export default Featured;