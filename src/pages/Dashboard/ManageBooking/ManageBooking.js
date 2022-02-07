import React, { useEffect, useState } from 'react';

const ManageBooking = () => {
    const [allbooking, setAllbooing] = useState([])
    const [control, setControl] = useState(false)

    useEffect(() => {
        fetch('https://arcane-anchorage-85397.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => {
                setAllbooing(data)
            })
    }, [])


    //cancel ticket by admin
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


    //approved ticket booking by admin 
    const handleUpdate = id => {
        fetch(`https://arcane-anchorage-85397.herokuapp.com/booking/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Booking Approved Successfully')
                    setControl(!control)
                }
                else {
                    setControl(false)
                }
            })
    }

    return (
        <div>

            <div class="py-14 lg:px-4 md:px-6 2xl:px-20 w-full  2xl:mx-auto">


                <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div class="flex flex-col justify-start items-start lg:w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div class="lg:flex lg:flex-col justify-between items-start dark:bg-gray-800 bg-black px-4 py-4 md:py-6 md:p-6 xl:p-8 lg:w-full ">
                            <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Booking Count  <span>:{allbooking.length}</span></p>

                            {
                                allbooking.map(book =>
                                    <div class="mt-4 md:mt-6 lg:flex flex-col md:flex-row justify-between items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                        <div class="pb-4 md:pb-8 w-full md:w-40">
                                            <img class="w-full  md:block" src={book.pack.img} alt="dress" />

                                        </div>
                                        <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start lg:px-20 w-full pb-8 space-y-4 md:space-y-0">
                                            <div class="w-full flex flex-col justify-start items-start space-y-8">
                                                <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{book.pack.title}</h3>
                                                <div class="flex justify-start items-start flex-col space-y-2">
                                                    <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Booking Name: </span>{book.name} </p>
                                                    <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Person: </span>{book.person}</p>
                                                    <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Phone: </span> {book.phone}</p>
                                                    <p class="text-sm font-bold dark:text-yellow-400 leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Status: </span> {book.status}</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-center'>
                                                <div onClick={() => { handleUpdate(book._id) }} className='mx-2'>
                                                    <button className='lg:w-60 p-5 w-40 mt-5 lg:mt-0 mx-auto bg-white '>Approve</button>
                                                </div>
                                                <div onClick={() => { handleCancel(book._id) }} className='mx-2'>
                                                    <button className='lg:w-60 mt-5 lg:mt-0 p-5 w-full mx-auto  bg-white'>Cancel Ticket</button>
                                                </div>
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

export default ManageBooking;