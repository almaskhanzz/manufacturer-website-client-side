import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    //redirect user to the desired destination
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (user || gUser) {
        navigate(from, { replace: true });
    }
    const onSubmit = data => {
        console.log(data.email);
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className='flex h-screen-80 justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
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
                                <Link className='label-text text-[#7a7878]' to='/resetPassword'><span className='underline underline-offset-1 hover:text-[#000005]'>Forgot your password?</span></Link>
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="At least 6 characters"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    pattern: {
                                        // value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
                                        // message: 'Use 8 or more characters with a mix of letters, numbers & symbols'
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

                        <input className="btn text-white w-full max-w-xs" type="submit" value="Login" />
                    </form>
                    <p className='text-red-500 mt-1 text-center'>
                        <small>{error?.message}</small>
                    </p>
                    {
                        loading && <Loading />
                    }
                    <p className='text-center'>
                        <small>
                            New to Stronghold?
                            <Link className='text-red-900 font-bold' to='/signup'> Create new account</Link>
                        </small>
                    </p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button>
                    <p className='text-red-500 mt-1'>{gError?.message}</p>
                    {
                        gLoading && <Loading />
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;