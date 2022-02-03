import React from 'react';
import { Link } from 'react-router-dom';
import './Featured.css'


const attractions = [


    {
        id: 1,
        title: 'Loo Ferris wheel',
        description: 'This is one of the best rides that provide a million romantic moments and breath taking views. Designed by an engineer from Colombia in 1983. It involves passenger cars attached around the outer edge of a rotating wheel. It displaces you vertically and horizontally from a fixed pivot.',
        img: 'https://i.ibb.co/S3KYrV8/ethan-hoover-zy-U2g-Q9m-WLM-unsplash.jpg',
        fair: 50
    },
    {
        id: 2,
        title: 'Loo Ballon Rides',
        description: 'This ride was completed back in the year 1926 by a grate designer called Herbert Sellner. This configuration involved seven cars pivoted on fixed points on a rotating platform that raised and lowered itself. The cars are launched into a free spinning and gains centrifugal force. The effects of the gravitational force would create wild spins in a different direction creating a thrilling sensation on the rider.',
        img: 'https://i.ibb.co/vBV3ytG/tyler-nix-kxvo-c2-Ghw-Q-unsplash.jpg',
        fair: 100
    },
    {
        id: 3,
        title: 'Loo Haunted Mansion',
        description: 'It has several names, in America it is called the Scrambler. This ride involves fast and breath taking speeds. It has three arms, each arm is clustered with several cars, and relative to the size the cars are smaller on its own. When started, scrambling commences and the main arm and the little arms all begin to rotate. The acceleration between the outer and the inner arms are varied. With these movements, a frightening illusion is created. You will observe a close collision of the cars and their passengers. It is a very scary experience.',
        img: 'https://i.ibb.co/tHWDtqG/priscilla-du-preez-FOsina4f7q-M-unsplash.jpg',
        fair: 50
    },
    {
        id: 4,
        title: 'Bumper cars',
        description: 'It recreates the fun and thrill associated with the fender bender. It was introduced in the 1920s. They are attributed to large rings with a pen and graphite floor meant to decrease friction. The riders drive the small electric cars that obtain power from the overhead grid towards the other cars in the pen to achieve a crash. They land on rubber bumpers with or without breaks you are assured that you are safe',
        img: 'https://i.ibb.co/k8mymvB/david-trana-mmdchg5-UPt-Q-unsplash.jpg',
        fair: 70
    },
    {
        id: 5,
        title: 'Loo Disney Land',
        description: 'It has several names, in America it is called the Scrambler. This ride involves fast and breath taking speeds. It has three arms, each arm is clustered with several cars, and relative to the size the cars are smaller on its own. When started, scrambling commences and the main arm and the little arms all begin to rotate. The acceleration between the outer and the inner arms are varied. With these movements, a frightening illusion is created. You will observe a close collision of the cars and their passengers. It is a very scary experience.',
        img: 'https://i.ibb.co/DVftGKx/yulissa-tagle-P-Sw-HEKa-BMg-unsplash.jpg',
        fair: 150
    },
    {
        id: 6,
        title: 'Loo Night Cafe',
        description: 'It has several names, in America it is called the Scrambler. This ride involves fast and breath taking speeds. It has three arms, each arm is clustered with several cars, and relative to the size the cars are smaller on its own. When started, scrambling commences and the main arm and the little arms all begin to rotate. The acceleration between the outer and the inner arms are varied. With these movements, a frightening illusion is created. You will observe a close collision of the cars and their passengers. It is a very scary experience.',
        img: 'https://i.ibb.co/JyJqyg6/rod-long-Y0-DCYv-Myn-V8-unsplash-1.jpg',
        fair: 50
    }

]



const Featured = () => {
    return (
        <div>
            <div class="flex mt-10  justify-center items-center pt-8">

                <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                    <div role="main" class="flex flex-col items-center justify-center">
                        <h1 class="text-4xl font-bold leading-9 text-center text-black uppercase">FEATURED ATTRACTIONS</h1>
                        <p class="text-base leading-normal text-center text-gray-600 dark:text-gray mt-4 lg:w-2/3 md:w-10/12 w-11/12">For nearly one hundred years, Knott's Berry Farm has been drawing fans from all over. What started as a small family farm soon grew into a world famous destination.</p>
                    </div>
                </div>


            </div>
            {
                attractions.map(item =>
                    <div class="flex justify-center items-center  bg-blue-lightest">
                        <div id="app" class="bg-white w-3/4  mx-10 my-4 p-2 h-70 rounded shadow-md flex card text-grey-darkest">
                            <img class="w-80 h-full rounded-l-sm" src={item.img} alt="Room Im" />
                            <div class="w-full flex flex-col">
                                <div class="p-4 pb-0 flex-1">
                                    <h3 class="font-light text-xl uppercase mb-2 text-grey-darkest">{item.title}</h3>

                                    <span class="text-5xl text-grey-darkest">£{item.fair}<span class="text-lg">/PP</span></span>
                                    <div class="flex items-center mt-4">
                                        <div class="pr-2 my-2 text-xs">
                                            {item.description.slice(0, 250)}
                                        </div>

                                    </div>
                                </div>
                                <Link to='/' className="bg-gray-100 ml-3 p-3  flex items-left justify-between transition hover:bg-grey-light">
                                    BUY TICKET
                                    <i class="fas fa-chevron-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                )
            }
        </div >
    );
};

export default Featured;