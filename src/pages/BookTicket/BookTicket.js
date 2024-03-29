import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/usefirebase';
import { useForm } from "react-hook-form";

const BookTicket = () => {
    const [pack, setPack] = useState({})
    const { id } = useParams()
    const { user } = useAuth()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        data.pack = pack;
        data.status = 'pending'
        // console.log(data);
        fetch('https://waterloo-server-rabi-mezan.vercel.app/bookTicket', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booking successfull !!')
                    reset()
                }
            })
        reset()
    }



    useEffect(() => {
        fetch(`https://waterloo-server-rabi-mezan.vercel.app/details/${id}`)
            .then(res => res.json())
            .then(data => setPack(data))
    }, [])

    return (

        <div className='grid lg:grid-cols-2  items-center justify-center h-screen px-10 lg:py-10  bg-gray-100'>
            <div>
                <img className=' hidden md:block' src={pack.img} alt="" />
            </div>
            <form className='dark:bg-gray-800 flex justify-center flex-col px-16 py-20  shadow ' onSubmit={handleSubmit(onSubmit)}>
                <input className='p-2 w-full bg-gray-100 rounded shadow' {...register("name")} defaultValue={user.displayName} readOnly />
                <br />
                <input className='p-2 bg-gray-100 rounded shadow' {...register("email")} defaultValue={user.email} readOnly />
                <br />
                <input className='p-2 bg-gray-100 rounded shadow' {...register("phone")} defaultValue={user?.phone} placeholder='phone number' type='number' />
                <br />
                <input className='p-2 bg-gray-100 rounded shadow' {...register("person")} placeholder='person number' type='number' />
                <br />
                <input className='p-2 bg-gray-100 rounded shadow' {...register("package")} defaultValue={pack.title} readOnly />
                <br />
                <input className='bg-gray-700 py-2 rounded shadow font-bold text-white' type="submit" value='BOOK' />
            </form>
        </div>
    );
};

export default BookTicket;