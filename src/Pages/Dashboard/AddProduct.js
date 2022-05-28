import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imgStorageKey = '6c82c1eeafe2b4a34a6fef717a0ca4d9';

    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const review = {
                        name: data.name,
                        price: data.price,
                        minimumOrder: data.minimumOrder,
                        available: data.available,
                        description: data.description,
                        img: img
                    }
                    //send to your database...
                    fetch('http://localhost:5000/part', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                alert('product added successfully!');
                                reset();
                            }
                            else {
                                alert('Failed to add the product');
                            }
                        })
                }
            })
    }

    return (
        <div className='mt-6  '>
            <div className='w-96 mx-auto'>
                <h2 className='text-2xl font-bold ml-24'>Add a Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name field */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required.'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    {/* price field */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Product Price"
                            className="input input-bordered w-full max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required.'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        </label>
                    </div>
                    {/* price field */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Minimum Order Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Minimum Order"
                            className="input input-bordered w-full max-w-xs"
                            {...register("minimumOrder", {
                                required: {
                                    value: true,
                                    message: 'Minimum Order is Required.'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.minimumOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}
                        </label>
                    </div>
                    {/* availableQuantity field */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Available Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Available Products"
                            className="input input-bordered w-full max-w-xs"
                            {...register("available", {
                                required: {
                                    value: true,
                                    message: 'Available Quantity is Required.'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                        </label>
                    </div>
                    {/* description field */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Description</span>
                        </label>
                        <textarea
                            placeholder="Product Description"
                            className="input input-bordered w-full max-w-xs"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required.'
                                }
                            })} />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>

                    </div>

                    {/* //image field */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Image</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required.'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>
                    <input className="btn text-white w-full max-w-xs mt-6" type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;