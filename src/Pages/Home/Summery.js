import React from 'react';
import summery from '../../assets/images/summery_background.jpg';
import { HiUserGroup, HiCurrencyDollar, HiThumbUp, HiOutlineFlag } from "react-icons/hi";

const Summery = () => {
    return (
        <div className="lg:mb-10 mb-4" style={{
            background: `url(${summery})`,
            backgroundSize: 'cover'
        }}>
            <div className='text-center font-bold p-14'>
                <h2 className='text-3xl text-emerald-900' >REASONS WHY YOU NEED US</h2>
                <p className='text-xl mt-6 text-rose-900'>FIND YOUR BEST SOLUTIONS</p>
            </div>
            <div className='lg:p-20 pb-10'>
                <div class="lg:ml-30 ml-16 stats stats-vertical lg:stats-horizontal shadow">
                    <div class="stat px-20">
                        <div><HiOutlineFlag size='3em' color='brown' /></div>
                        <div class="stat-title">COUNTRIES</div>
                        <div class="stat-value">20</div>
                    </div>
                    <div class="stat px-20">
                        <div><HiCurrencyDollar size='3em' color='red' /></div>
                        <div class="stat-title">REVENUE</div>
                        <div class="stat-value">$1230</div>
                        <div class="stat-desc mt-2 font-bold"><span className='text-green-500'>+5</span> vs last 28 days</div>
                    </div>
                    <div class="stat px-20">
                        <div ><HiUserGroup size='3em' color='green' /></div>
                        <div class="stat-title">USERS</div>
                        <div class="stat-value">4,200</div>
                        <div class="stat-desc mt-2 font-bold"><span className='text-red-500'>+2%</span> vs last 28 days</div>
                    </div>
                    <div class="stat px-20">
                        <div><HiThumbUp size='3em' color='blue' /></div>
                        <div class="stat-title">FEEDBACKS</div>
                        <div class="stat-value">500+</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summery;