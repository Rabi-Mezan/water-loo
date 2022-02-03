import React from 'react';
import './Banner.css'
import bgimage from '../../../img/banner3.jpg'



const Banner = () => {
    return (
        <div

            style={{
                backgroundImage: 'url(' + bgimage + ')',
                backgroundSize: "cover",
                height: "90vh",
                width: "100vw",


            }}
            class="showcase"
        >
            <section

            >
                <header>
                    <h2 class="logo text-2xl font-bold">WELCOME TO WATERLOO</h2>

                </header>
                <div

                    className='paralax img-fluid'></div>
                <div class="overlay"></div>
                <div class="text">
                    <h2>Never Stop To </h2>
                    <h3>Exploring The World</h3>
                    <p>100% Authentic Tickets. Dedicated Customer Support. e-Ticket Delivery. Children's Charities Sponsor.

                        A Trusted Seller of Discounted Attraction Tickets & Vacation Packages.</p>
                    <a href="/">Explore</a>
                </div>
                <ul class="social">
                    <li><a href="/">
                        <img src="https://i.ibb.co/x7P24fL/facebook.png" /></a></li>
                    <li><a href="/">
                        <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" /></a></li>
                    <li><a href="/">
                        <img src="https://i.ibb.co/ySwtH4B/instagram.png" /></a></li>
                </ul>
            </section>

        </div >
    );
};

export default Banner;