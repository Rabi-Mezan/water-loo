import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Feedback = () => {

    const [feedbackdata, setFeedbackData] = useState()

    const hanldeOnblur = e => {
        const field = e.target.name
        const value = e.target.value;
        let newData = { ...feedbackdata }
        newData[field] = value
        setFeedbackData(newData)
    }


    const handleFeedback = e => {
        console.log(feedbackdata.email, feedbackdata.feedbacktext);
        // var frm = document.getElementsById('feedbackForm');

        fetch('https://arcane-anchorage-85397.herokuapp.com/feedback', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(feedbackdata)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("thanks For your Valuable Feedback")
                }
            })

        e.preventDefault()
        // frm.reset();

    }

    return (
        <div>

            <section>
                <div class="dark:bg-gray-800 text-white py-20">
                    <div class=" mx-auto flex flex-col md:flex-row my-6 lg::my-24">
                        <div class="flex flex-col w-full lg:w-1/4 p-8">
                            <p class="lg:ml-6 text-yellow-300 text-lg uppercase tracking-loose">REVIEW</p>
                            <p class="text-3xl md:text-4xl font-bold my-4 leading-relaxed md:leading-snug">Leave Your feedback!</p>
                            <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                Please provide your valuable feedback and something something ...
                            </p>
                        </div>
                        <div class="flex flex-col w-full lg:w-3/4 justify-center">
                            <div class=" w-full px-4">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full lg:w-8/12 px-4">
                                        <div
                                            class=" flex flex-col  break-words   mb-6 shadow-lg rounded-lg bg-white">
                                            <div class="flex-auto  p-10">
                                                <h4 class="text-2xl mb-4 text-black font-semibold">Have a suggestion?</h4>
                                                <form onSubmit={handleFeedback} id="feedbackForm" action="" method="">
                                                    <div class="relative w-full mb-3">
                                                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                            for="email">Name</label><input type="text" name="name"
                                                                required
                                                                onBlur={hanldeOnblur} id="email" class="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
                                                        />
                                                    </div>
                                                    <div class="relative w-full mb-3">
                                                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                            for="email">Email</label><input type="email" name="email"
                                                                required
                                                                onBlur={hanldeOnblur} id="email" class="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
                                                        />
                                                    </div>
                                                    <div class="relative w-full mb-3">
                                                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                            for="message">Message</label><textarea type="text" name="feedbacktext"
                                                                onBlur={hanldeOnblur} maxlength="300" id="feedback" rows="4"
                                                                cols="80"
                                                                class="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                                                                placeholder="" required></textarea>
                                                    </div>
                                                    <div class="text-center mt-6 text">
                                                        <button to='/' id="feedbackBtn"
                                                            class="w-300 text-white  text-center mx-auto bg-black w-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                            type="submit" >Submit
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feedback;