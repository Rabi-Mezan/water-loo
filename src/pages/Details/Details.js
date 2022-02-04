import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const { packid } = useParams()
    const [pack, setPack] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/details/${packid}`)
            .then(res => res.json())
            .then(data => setPack(data))
    }, [])

    return (
        <div className='h-screen'>

            {/* <div
                style={{
                    backgroundImage: `url(${pack.img})`,
                    backgroundSize: "cover",
                    height: "70vh",
                    width: "80vw",
                    backgroundRepeat: 'no-repeat'
                }}
                className='paralax flex justify-end'>

            </div> */}

            <div class="2xl:mx-auto 2xl:container mx-4 py-16">
                <div class="w-full relative flex items-center justify-center">
                    <img className='' src={pack.img} alt="dining" class="w-full h-full absolute z-0 hidden xl:block" />
                    <img src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png" alt="dining" class="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
                    <img src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png" alt="dining" class="w-full h-full absolute z-0 sm:hidden" />
                    <div class="bg-gray-800 bg-opacity-60 hover:opacity-90 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                        <h1 class="text-5xl font-semibold leading-9 text-white text-center">{pack.title}</h1>
                        <p class=" text-sm leading-normal text-center text-white mt-6">
                            {pack.description}
                        </p>


                        <div class=" flex-col justify-between sm:flex-row flex items-center lg:w-2/4  mt-12 space-y-4 sm:space-y-0">
                            <div>
                                <p className='text-white text-3xl font-bold  '>Ticket Fair<span class="text-5xl font-bold text-yellow-400 text-grey-darkest ml-5">£{pack.fair}<span class="text-lg">/PP</span></span></p>
                            </div>
                            <button class="focus:outline-none mx-auto focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75 hover:scale-x-110 ">Book Ticket</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Details;