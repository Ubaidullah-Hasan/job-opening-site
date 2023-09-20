import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const { id, jobTitle, jobDescription, workType, startDate, salary, experience, applyLastDate, responsibilities, requiredSkills } = job;

    return (
        <div className='py-8 px-5 border shadow rounded-lg'>
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
            <button className='mt-4 btn'><Link to={jobTitle} className=''>Details</Link></button>
        </div>
    );
};

export default JobCard;