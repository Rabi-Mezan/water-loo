import React from 'react';
import Attractions from './Attractions/Attractions';
import Banner from './Banner/Banner';
import Featured from './Featured/Featured';
import Gallery from './Gallery/Gallery';
import Newslatter from './Newslatter/Newslatter';
import Speciality from './Speciality/Speciality';
import UserReview from './UserReview/UserReview';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Attractions></Attractions>
            <Speciality></Speciality>
            <Featured></Featured>
            <Gallery></Gallery>
            <UserReview></UserReview>
            <Newslatter></Newslatter>

        </div>
    );
};

export default Home;