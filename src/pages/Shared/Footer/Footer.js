import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='h-96 flex flex-col items-center justify-center  dark:bg-gray-800 mt-28 pt-20'>
                <div className='grid justify-items-end grid-cols-4 gap-16'>
                    <div className='text-right border-r-2 pr-4 leading-7'>
                        <h5 className='uppercase text-white font-semibold mb-4'>Links</h5>
                        <p className='text-gray-200'>Gallery</p>
                        <p className='text-gray-200'>Pricing</p>
                        <p className='text-gray-200'>Privacy Policy</p>
                    </div>
                    {/* <div>
                        <h1 class="lg:visible lg:text-4xl font-bold text-yellow-400 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">WATERLOO</h1>
                    </div> */}
                    <div className='text-left   pl-4 leading-7'>
                        <h5 className='uppercase text-white font-semibold mb-4'>About</h5>
                        <p className='text-gray-200'>Services</p>
                        <p className='text-gray-200'>Newsletter</p>
                        <p className='text-gray-200'>Our Events</p>
                    </div>
                    <div className='text-left  border-l-2 pl-4 leading-7'>
                        <h5 className='uppercase text-white font-semibold mb-4'>SERVICES</h5>
                        <p className='text-gray-200'>Services</p>
                        <p className='text-gray-200'>Newsletter</p>
                        <p className='text-gray-200'>Our Events</p>
                    </div>
                    <div className='text-left  border-l-2 pl-4 leading-7'>
                        <h5 className='uppercase text-white font-semibold mb-4'>RESOURCES</h5>
                        <p className='text-gray-200'>Services</p>
                        <p className='text-gray-200'>Newsletter</p>
                        <p className='text-gray-200'>Our Events</p>
                    </div>


                </div>




            </div>
            <div className='dark:bg-gray-800 text-center py-5'>
                <hr />
                <small className='text-yellow-500'>WATERLOO © Ravi//2022. ALL RIGHTS RESERVED.</small>
            </div>
        </div>
    );
};

export default Footer;