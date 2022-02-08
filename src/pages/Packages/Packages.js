import React, { useEffect, useState } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';
import './Packages.css'


const Packages = () => {

    const [content, setContent] = useState([])
    const [packages, setPackages] = useState([])


    useEffect(() => {
        fetch('https://arcane-anchorage-85397.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])



    useEffect(() => {
        fetch('/slider.json')
            .then(res => res.json())
            .then(data => setContent(data))
    }, [])




    return (
        <div className=''>
            <Slider autoplay={3000}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        style={{ background: `url('${item.image}') no-repeat  center`, backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100%", height: "100%", position: "absolute" }}
                    >
                        <div className="center">
                            <p className='text-5xl font-bold text-white'>{item.title}</p>

                        </div>
                    </div>
                ))}
            </Slider>

            <div class="flex flex-col items-center my-12 p-6 lg:p-0 justify-center">
                <h1 class="lg:text-4xl text-xl font-bold leading-9 text-center text-black uppercase">FIND ALL OUR  ATTRACTIONS</h1>
                <p class="lg:text-base text-xs leading-normal text-center text-gray-600 dark:text-gray mt-4 lg:w-2/3 md:w-10/12 w-full">For nearly one hundred years, Knott's Berry Farm has been drawing fans from all over. What started as a small family farm soon grew into a world famous destination.</p>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1  lg:mx-4 content-center lg:gap-2  lg:py-10'>
                {
                    packages.map(pack =>

                        <div
                            data-aos="zoom-in-down"

                            data-aos-delay="10"
                            data-aos-duration="1000"
                            data-aos-anchor-placement="top-center"
                            class=" m-10 shadow-md">
                            <div class="lg:flex lg:max-w-1/3 bg-blue-50  rounded-lg lg:overflow-hidden">
                                <div class="lg:w-1/3 bg-cover" style={{
                                    backgroundImage: `url(${pack.img})`
                                }}>
                                </div>
                                <div class="lg:w-2/3   p-4">
                                    <h1 class="text-gray-900 font-bold text-2xl uppercase">{pack.title}</h1>
                                    <p class="mt-2 text-gray-600 text-xs">{pack.description.slice(0, 250)}</p>

                                    <div className=''>
                                        <Link to={`/details/${pack._id}`} class="lg:flex items-center justify-between lg:mt-5 my-4">
                                            <h1 class="text-gray-700 font-bold text-xl my-4">£{pack.fair}/PP</h1>
                                            <button class="px-3 lg:w-1/3 h-10 py-2 bg-black hover:scale-110 text-white text-xs uppercase">See Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default Packages;