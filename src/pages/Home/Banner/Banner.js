import React from 'react';
import './Banner.css'
import bgimage from '../../../img/banner3.jpg'
import { Link } from 'react-router-dom';



const Banner = () => {
    return (
        <div

            style={{
                backgroundImage: 'url(' + bgimage + ')',
                backgroundSize: "cover",
                height: "105vh",
                width: "100vw",


            }}
            class="banner paralax"
        >
            <section
                className=''
            >
                <header>
                    <h2 class="logo pt-8  text-2xl font-bold">WELCOME TO WATERLOO</h2>

                </header>
                <div

                    className=' img-fluid'></div>
                <div class="overlay"></div>
                <div class="text">
                    <h2>Never Stop To </h2>
                    <h3>Exploring The World</h3>
                    <p>100% Authentic Tickets. Dedicated Customer Support. e-Ticket Delivery. Children's Charities Sponsor.

                        A Trusted Seller of Discounted Attraction Tickets & Vacation Packages.</p>
                    <Link to="/packages">Explore</Link>
                </div>
                <ul class="social">
                    <li><a href="/">
                        <img src="https://i.ibb.co/x7P24fL/facebook.png" alt='' /></a></li>
                    <li><a href="/">
                        <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt='' /></a></li>
                    <li><a href="/">
                        <img src="https://i.ibb.co/ySwtH4B/instagram.png" alt='' /></a></li>
                </ul>
            </section>

        </div >
    );
};

export default Banner;