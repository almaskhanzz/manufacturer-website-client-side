import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();
    if (user) {
        navigate('/home');
    }
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className='flex h-screen-80 justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
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

                        {/* email field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="yourname@example.com"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required.'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provide valid email address.'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        {/* //password field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="At least 6 characters"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    pattern: {
                                        value: /.{6,}/,
                                        message: 'Passwords must be at least 6 characters.'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <input className="btn text-white w-full max-w-xs" type="submit" value="Sign Up" />
                    </form>
                    <p className='text-red-500 mt-1'>{error?.message}</p>
                    {
                        loading && <Loading />
                    }
                    <p className='text-center'>
                        <small>
                            Already have an account?
                            <Link className='text-blue-900 font-bold' to='/login'> Sign-In</Link>
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;