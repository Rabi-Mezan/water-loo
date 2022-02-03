import React from 'react';
import Attractions from './Attractions/Attractions';
import Banner from './Banner/Banner';
import Speciality from './Speciality/Speciality';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Attractions></Attractions>
            <Speciality></Speciality>
        </div>
    );
};

export default Home;