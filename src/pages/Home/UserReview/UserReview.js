import React, { useEffect, useState } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import useAuth from '../../../hooks/useAuth';

const UserReview = () => {
    const { user } = useAuth()
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://waterloo-server-rabi-mezan.vercel.app/feedback')
            .then(res => res.json())
            .then(data => setReview(data))
        console.log(user);
    }, [review])


    return (
        <div className=' lg:mx-20  '>
            <div

                class="flex mt-10  justify-center items-center pt-8 my-10">

                <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4  sm:w-auto">
                    <div role="main" class="flex flex-col items-center justify-center">
                        <h1 class="lg:text-4xl text-2xl font-bold leading-9 text-center text-black uppercase">What people say about us</h1>
                        <p class="lg:text-base text-xs leading-normal text-center text-gray-600 dark:text-gray mt-4 lg:w-2/3 md:w-10/12 w-full">For nearly one hundred years, Knott's Berry Farm has been drawing fans from all over. What started as a small family farm soon grew into a world famous destination.</p>
                    </div>

                </div>


            </div>
            <div className='lg:px-6 ' >
                <Slider autoplay={3000}>
                    {review?.map((item) => (
                        <div className=''
                            key={review._id}
                            style={{ width: "100%", height: "100%", position: "absolute" }}

                        >
                            <div className="center flex items-center justify-center lg:-mt-40 -mt-60  p-5">
                                <img class="w-24 h-24 p-1 mb-3 bg-white rounded-full" src={user?.photoURL} alt="" />
                                <p className='lg:text-3xl text-xl font-bold text-black'>{item.name}</p>

                                <small className='text-black mt-2 w-2/3'>"{item.feedbacktext
                                }"</small>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default UserReview;