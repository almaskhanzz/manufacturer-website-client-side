import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-woodland-46458.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className='mb-10 mt-10 w-11/12 mx-auto'>
            <div className='text-center'>
                <h2 className='font-bold text-3xl text-cyan-900'>Our Customer Reviews</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 mt-8'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;