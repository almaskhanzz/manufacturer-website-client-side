import React from 'react';

const Review = ({ review }) => {
    const { name, rating, img, description } = review;
    // console.log(img);
    return (
        <div className="card w-86 md:max-w-md lg:max-w-lg bg-orange-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} width='100px' className="rounded-xl" alt='' />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{name}</h2>
                <h2 className="card-title font-bold">Rating: {rating}</h2>
                <p className='text-xl'>{description}</p>
            </div>
        </div>
    );
};

export default Review;