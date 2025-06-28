import React from 'react';

const RecentJobCard = ({ recentJob }) => {

    const { id, postDate, companyLogo, companyName, employmentType, salary, location, experience, jobRole } = recentJob;
    return (
        <div className="job-card">
            <div className="job-card-content">
                <div className="job-post-date">
                    <p>{postDate}</p>
                </div>
                <div className="job-card-logo">
                    <img src={companyLogo} alt={`${companyName} logo`} />
                </div>
                <div className="job-card-info">
                    <h3>{jobRole}</h3>
                    <p className="company-name">{companyName}</p>
                    <p>{location}</p>
                    <p>{employmentType}</p>
                    <p>{experience}</p>
                    <p className="salary">{salary}</p>
                </div>
            </div>
        </div>

    );
};

export default RecentJobCard;