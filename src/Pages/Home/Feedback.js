import React from 'react';

const Feedback = () => {
    return (
        <div className="hero min-h-screen shadow-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse lg:px-40">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Want to know <span className='text-cyan-900'>Stronghold</span>!</h1>
                    <p className="py-6">If you want to know our policy then contact with us. We will be happy to assist you.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:mr-10">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Feedback</span>
                            </label>
                            <textarea type="textarea" placeholder="Write your questions" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;