import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const { id, jobTitle, workType, salary, experience, applyLastDate, responsibilities } = job;

    return (
        <div className='py-5 lg:py-8 px-3 lg:px-5 border shadow rounded-lg'>
            <h1 className='text-lg font-bold'>{jobTitle}</h1>
            <ul className='list-disc ps-5 text-gray-600 my-4'>
                {
                    responsibilities.map((point, i) => <li key={i}>{point}</li>)
                }
            </ul>
            <div className='grid grid-cols-3 gap-4 text-blue-600 font-semibold text-sm mt-auto'>
                <p className='border p-2 text-center'>{workType}</p>
                <p className='border p-2 text-center col-span-2'>Experience: {experience}</p>
            </div>
            <Link to={jobTitle}><button className='mt-4 btn'>Details</button></Link>
        </div>
    );
};

export default JobCard;