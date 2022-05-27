import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, []);

    return (
        <div className='mb-10 mt-10'>
            <div className='text-center'>
                <h2 className='font-bold text-2xl text-cyan-900'>OUR MOTORCYCLE PARTS</h2>
                <h1 className='text-2xl font-medium'>Products We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 mt-8'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;