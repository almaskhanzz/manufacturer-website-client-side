import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className='text-center mt-10'>
            <h2 className='text-2xl font-bold'>My Profile</h2>
            <div>
                <h3 className='mt-4'>Email: {user.email}</h3>
            </div>
        </div>
    );
};

export default MyProfile;