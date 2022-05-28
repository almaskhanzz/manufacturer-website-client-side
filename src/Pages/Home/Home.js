import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Feedback from './Feedback';
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
            <Feedback />
            <Footer />
        </div>
    );
};

export default Home;