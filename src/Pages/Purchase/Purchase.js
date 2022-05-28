import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { purchaseId } = useParams();
    // console.log(purchaseId);

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const url = `https://mysterious-woodland-46458.herokuapp.com/part/${purchaseId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product]);
    return (
        <div className='flex justify-center items-center'>
            <div className='lg:mt-10'>
                <h1 className='text-center mb-10 text-2xl font-bold'>Details of the Product</h1>
                <div className="card w-86 md:max-w-md lg:max-w-lg bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={product.img} className="rounded-xl" alt='' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">{product.name}</h2>
                        <h3 className="text-xl"><span className='font-bold'>Price:</span> ${product.price}</h3>
                        <h3 className="text-xl"><span className='font-bold'>Minimum Order Quantity: </span>{product.orderQuantity}</h3>
                        <h3 className="text-xl"><span className='font-bold'>Available Quantity: </span>{product.availableQuantity}</h3>
                        <p className='text-xl'>{product.description}</p>
                        <button className="btn btn-active btn-accent mt-4">Complete Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;