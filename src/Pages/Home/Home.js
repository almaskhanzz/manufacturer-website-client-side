import React from 'react';
import Footer from '../Shared/Footer';
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
            <Footer />
        </div>
    );
};

export default Home;