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

            <div className='grid grid-cols-2 mx-10 content-center gap-8 py-10'>
                {
                    packages.map(pack =>

                        <div class="py-6 m-10 border-y-2 border-blue-400 shadow">
                            <div class="flex max-w-1/3 bg-white  rounded-lg overflow-hidden">
                                <div class="w-1/3 bg-cover" style={{
                                    backgroundImage: `url(${pack.img})`
                                }}>
                                </div>
                                <div class="w-2/3  p-4">
                                    <h1 class="text-gray-900 font-bold text-2xl uppercase">{pack.title}</h1>
                                    <p class="mt-2 text-gray-600 text-xs">{pack.description.slice(0, 250)}</p>
                                    <div class="flex item-center mt-2">
                                        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                        </svg>
                                        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                        </svg>
                                        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                        </svg>
                                        <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                        </svg>
                                        <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                        </svg>
                                    </div>
                                    <Link to={`/details/${pack._id}`} class="flex item-center justify-between mt-3">
                                        <h1 class="text-gray-700 font-bold text-xl">£{pack.fair}/PP</h1>
                                        <button class="px-3 w-2/3 h-10 py-2 bg-gray-800 opacity-50 hover:opacity-90 hover:scale-110 text-white text-xs font-bold uppercase rounded">See Details</button>
                                    </Link>
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