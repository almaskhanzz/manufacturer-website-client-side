import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile ">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content rounded-l-lg bg-teal-50 lg:px-10 lg:py-8">
                <h2 className='text-2xl font-bold text-teal-800'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {
                        !admin ?
                            <>
                                <li><Link to='/dashboard'>My Orders</Link></li>
                                <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                            </>
                            :
                            <>
                                <li><Link to='/dashboard/users'>Make Admin</Link></li>
                                <li><Link to='/dashboard/mangeOrders'>Manage All Orders</Link></li>
                                <li><Link to='/dashboard/addProducts'>Add a Product</Link></li>
                                <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                            </>
                    }
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;