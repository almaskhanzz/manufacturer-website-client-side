import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">My Portfolio</h1>
                    <div className='mt-4'>
                        <h2>Name: Almas Khan</h2>
                        <h2>Email: almas.rbm@gmail.com</h2>
                        <h3>B.sc in CSE from AIUB</h3>
                        <h3>Currently doing Masters in Data Science at TU Dortmund</h3>
                        <p>List of technologies: C, C++, Java, C#, Html, CSS, Bootstrap, Tailwindcss, Netlify, Heroku, javascript, php, laravel, node js, react js, express js, mongodb, mysql. </p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;