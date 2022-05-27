import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const ResetPassword = () => {
    //reset password
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    const onSubmit = async (data) => {
        // console.log(data.email);
        const email = data.email;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent Email Successfully!');
        }
    }
    return (
        <div className='flex h-screen-80 justify-center items-center lg:mt-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Forgot your password?</h2>
                    <p className='text-center'>Enter the email address associated with your account and we'll send you a link to reset your password.</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
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

                        <input className="btn text-white w-full max-w-xs" type="submit" value="Send password reset" />
                    </form>
                    <p className='text-red-500 mt-1'>{resetError?.message}</p>
                    {
                        sending && <Loading />
                    }
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;