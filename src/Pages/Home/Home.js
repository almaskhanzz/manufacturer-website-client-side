import React from 'react';
import Banner from './Banner';
import Parts from './Parts';
import Reviews from './Reviews';
import Summery from './Summery';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <Summery />
            <Reviews />
        </div>
    );
};

export default Home;