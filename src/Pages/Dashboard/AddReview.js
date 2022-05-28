import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
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
                        rating: data.rating,
                        description: data.description,
                        img: img
                    }
                    //send to your database...
                    fetch('https://mysterious-woodland-46458.herokuapp.com/review', {
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
                                alert('review added successfully!');
                                reset();
                            }
                            else {
                                alert('Failed to add the review');
                            }
                        })
                }
            })
    }

    return (
        <div className='mt-6  '>
            <div className='w-96 mx-auto'>
                <h2 className='text-2xl font-bold ml-24'>Add a review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name field */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="First and last name"
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
                    {/* rating field */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Rating</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Give your rating(1 to 5)"
                            className="input input-bordered w-full max-w-xs"
                            {...register("rating", {
                                required: {
                                    value: true,
                                    message: 'rating is Required.'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                        </label>
                    </div>
                    {/* description field */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Description</span>
                        </label>
                        <textarea
                            placeholder="Give your review"
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
                    <input className="btn text-white w-full max-w-xs mt-6" type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;