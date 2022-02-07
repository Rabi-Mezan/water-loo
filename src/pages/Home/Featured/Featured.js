import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Featured.css'




const Featured = () => {

    const [attractions, setattrActions] = useState([])


    useEffect(() => {
        fetch('https://arcane-anchorage-85397.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setattrActions(data))
    }, [])




    return (
        <div>
            <div
                data-aos="zoom-in-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-center"
                class="flex mt-10  justify-center items-center pt-8 my-10">

                <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4  sm:w-auto">
                    <div role="main" class="flex flex-col items-center justify-center">
                        <h1 class="lg:text-4xl text-2xl font-bold leading-9 text-center text-black uppercase">FEATURED ATTRACTIONS</h1>
                        <p class="lg:text-base text-xs leading-normal text-center text-gray-600 dark:text-gray mt-4 lg:w-2/3 md:w-10/12 w-full">For nearly one hundred years, Knott's Berry Farm has been drawing fans from all over. What started as a small family farm soon grew into a world famous destination.</p>
                    </div>
                </div>


            </div>
            {
                attractions.slice(0, 5).map(item =>
                    <div
                        data-aos="zoom-in-down"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-anchor-placement="top-center"
                        class="flex lg:justify-start justify-center items-center  bg-blue-lightest">
                        <div id="app" class="bg-white lg:w-3/4 p-5 lg:mx-14 my-6 lg:p-2 h-70 rounded  lg:flex card text-grey-darkest">
                            <img class="lg:w-80 h-full rounded-l-sm" src={item.img} alt="img" />
                            <div class="w-full flex flex-col">
                                <div class="p-4 pb-0 flex-1">
                                    <h3 class="font-light text-xl uppercase mb-2 text-grey-darkest">{item.title}</h3>

                                    <span class="text-5xl text-grey-darkest">£{item.fair}<span class="text-lg">/PP</span></span>
                                    <div class="flex items-center mt-1">
                                        <div class="lg:pr-2 lg:my-1 text-xs my-3">
                                            {item.description.slice(0, 200)}
                                        </div>

                                    </div>
                                </div>

                                <div className='button w-full'>
                                    <Link to={`/details/${item._id}`} className="bg-gray-100 hover:bg-gray-500 lg:ml-3 p-3  hover:text-white flex items-center justify-between transition hover:bg-grey-light uppercase">
                                        See Details
                                        <i class="fas fa-chevron-right ml-5"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
        </div >
    );
};

export default Featured;