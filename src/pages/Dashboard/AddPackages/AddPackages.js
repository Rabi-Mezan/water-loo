import React from 'react';
import { useForm } from "react-hook-form";

const AddPackages = () => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/packages', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Packges aded')
                    reset();
                };
            })

    }

    return (
        <div className='flex justify-center w-full h-screen'>
            <div className='grid lg:grid-cols-1 items-center justify-center h-screen px-10 py-16 bg-gray-100 w-full'>

                <form className='bg-gray-800  flex justify-center flex-col px-16 py-20 w-full h-screen shadow' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center text-2xl my-4 font-bold text-white'>ADD NEW PACKAGES</h1>
                    <input className='p-2 bg-gray-100 rounded shadow' {...register("title")} type='text' placeholder='Package Title' />
                    <br />
                    <input className='p-2 bg-gray-100 rounded shadow' {...register("description")} type='text' placeholder='Package Descrition' />
                    <br />
                    <input className='p-2 bg-gray-100 rounded shadow' {...register("fair")} placeholder='Package Fair' type='number' />
                    <br />
                    <input className='p-2 bg-gray-100 rounded shadow' {...register("img")} placeholder='Image Link' type='text' />
                    <br />

                    <input className='bg-gray-700 py-2 rounded shadow font-bold text-white' type="submit" value='BOOK' />
                </form>
            </div>
        </div>
    );
};

export default AddPackages;