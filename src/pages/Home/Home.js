import React from 'react';
import Attractions from './Attractions/Attractions';
import Banner from './Banner/Banner';
import Featured from './Featured/Featured';
import Speciality from './Speciality/Speciality';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Attractions></Attractions>
            <Speciality></Speciality>
            <Featured></Featured>
        </div>
    );
};

export default Home;