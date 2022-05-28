import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, price, orderQuantity, availableQuantity, img, description } = part;

    const navigate = useNavigate();
    const handlePurchase = id => {
        console.log(id);
        navigate(`purchase/${id}`);

    }
    return (
        <div className="card w-86 md:max-w-md lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} className="rounded-xl" alt='' />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{name}</h2>
                <h3 className="text-xl"><span className='font-bold'>Price:</span> ${price}</h3>
                <h3 className="text-xl"><span className='font-bold'>Minimum Order Quantity: </span>{orderQuantity}</h3>
                <h3 className="text-xl"><span className='font-bold'>Available Quantity: </span>{availableQuantity}</h3>
                <p className='text-xl'>{description}</p>
                <button onClick={() => handlePurchase(_id)} className="btn btn-active btn-accent mt-4">Purchase</button>
            </div>
        </div>
    );
};

export default Part;