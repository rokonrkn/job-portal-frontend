import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecentJobCard from './RecentJobCard';

const RecentJobs = () => {

    const [recentJobs, setRecentJobs] = useState([]);

    console.log(recentJobs);

     useEffect(( ) => {
        fetch('/public/data/recentJobFakeData.json')
        .then(res => res.json())
        .then(data => setRecentJobs(data))
     })


    return (
        <div className='container'>
            <div className="recent-jobs-header">
                <h1>Recent jobs available</h1>
                <div className='recent-sub-title'>
                    <p>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet</p>
                    <Link to='/jobs'><button className='view-all-jobs'>view all jobs</button></Link>
                </div>
            </div>
            <div className="recent-job-list">
                {
                    recentJobs.map(recentJob => <RecentJobCard
                         key={recentJob.id} 
                         recentJob={recentJob}
                         ></RecentJobCard>)
                }
            </div>
        </div>
    );
};

export default RecentJobs;