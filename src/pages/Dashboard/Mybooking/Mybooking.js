import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Mybooking = () => {
    const [booking, setBooking] = useState([])
    const { user } = useAuth()
    const [control, setControl] = useState(false)
    const history = useHistory()

    useEffect(() => {
        fetch(`https://arcane-anchorage-85397.herokuapp.com/mybooking/${user?.email}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setBooking(result)
            })
    }, [control, history])

    const handleCancel = id => {
        const procedd = window.confirm('Are you sure to cancel the order??')
        if (procedd) {
            fetch(`https://arcane-anchorage-85397.herokuapp.com/mybooking/${id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert('Deleted Successfully')
                        setControl(!control)
                    }
                    else {
                        setControl(false)
                    }
                })

        }

    }


    return (
        <div>

            <div class="">


                <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div class="lg:flex lg:flex-col justify-start items-start dark:bg-gray-800 bg-black px-4 py-4 md:py-6 md:p-6 xl:p-8 lg:w-full">
                            <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Booking History</p>
                            {
                                booking.map(book =>
                                    <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                        <div class="pb-4 md:pb-8 w-full md:w-40">
                                            <img class="w-full md:block" src={book.pack.img} alt="dress" />

                                        </div>
                                        <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start lg:px-20 w-full pb-8 space-y-4 md:space-y-0">
                                            <div class="w-full flex flex-col justify-start items-start space-y-8">
                                                <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{book.pack.title}</h3>
                                                <div class="flex justify-start items-start flex-col space-y-2">
                                                    <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Booking Name: </span>{book.name} </p>
                                                    <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Person: </span>{book.person}</p>
                                                    <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Phone: </span> {book.phone}</p>
                                                    <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Status: </span> {book.status}</p>
                                                </div>
                                            </div>
                                            <div onClick={() => { handleCancel(book._id) }} className='lg:mx-10  transition-opacity  '>
                                                <button className='lg:w-60 p-5 w-80 mt-5 lg:mt-0 mx-auto bg-white  hover:bg-gray-300'>Cancel Ticket</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Mybooking;