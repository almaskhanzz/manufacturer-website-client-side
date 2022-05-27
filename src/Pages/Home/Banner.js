import React from 'react';
import backgroundBanner from '../../assets/images/banner_new.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{
            background: `url(${backgroundBanner})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Motor Cycle Parts</h1>
                    <p className="mb-5">Engineered for You</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;