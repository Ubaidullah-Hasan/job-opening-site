import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const JobDes = () => {
    const jobs = useLoaderData();
    const searchTitle = useParams();
    const navigate = useNavigate(null);

    const job = jobs.find(jb => jb.jobTitle === searchTitle?.jobtitle);
    // console.log(job);

    const { id, jobTitle, jobDescription,  salary, responsibilities, requiredSkills } = job;

    const handleApply = () => {
        console.log('apply');
        navigate("apply-form");
    }

    return (
        <div className='lg:mt-10 lg:w-[70%] mx-auto border-2 border-blue-500 rounded-lg py-14 px-9'>
            <h1 className='text-xl font-bold mb-4 uppercase'>{jobTitle}</h1>
            <p className='border-b pb-2 text-lg capitalize font-semibold'>About this job</p>
            <p className='mt-1 text-justify'>{jobDescription}</p>

            <p className='mt-5 text-lg capitalize font-semibold'>Skills: </p>
            <div className='grid  lg:grid-cols-4 gap-4'>
                {
                    requiredSkills.map((point, i) => <span className='border flex justify-center items-center text-center border-blue-500 py-1 text-blue-600' key={i}>{point}</span>)
                }
            </div>

            <p className='mt-5 text-lg capitalize font-semibold'>responsibilities: </p>
            <ul className='list-disc ps-5 text-gray-600'>
                {
                    responsibilities.map((point, i) => <li key={i}>{point}</li>)
                }
            </ul>
            <p className='mt-4'><span className='font-semibold text-lg capitalize'>salary:</span> {salary}</p>

            <button onClick={()=>handleApply()} className='btn btn-primary mt-5'>Apply</button>
        </div>
    );
};

export default JobDes;