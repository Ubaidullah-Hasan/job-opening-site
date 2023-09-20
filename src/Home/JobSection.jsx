import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const JobSection = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            });
    }, []);
    // console.log(jobs);

    return (
        <div className='my-8 lg:my-20 px-2 lg:px-0 lg:w-[90%] mx-auto'>
            <div>
                <h1 className='text-center text-2xl lg:text-4xl font-extrabold capitalize mb-4'>Opening Jobs</h1>
                <p className='text-center'>Find your best opportunity</p>
            </div>
            <div className='job-card grid lg:grid-cols-3 gap-4 mt-10 lg:mt-14'>
                {
                    jobs.map(job => <JobCard
                    key={job.id}
                    job={job}
                    ></JobCard> )
                }
            </div>
        </div>
    );
};

export default JobSection;