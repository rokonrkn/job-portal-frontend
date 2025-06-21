import React from 'react';

const Home = () => {
    return (
        <div className='hero-bg-image'>
            <div className="hero-content">
                <h2>Find Your Dream Job Today!</h2>
                <p>Connecting Talent with Opportunity: Your Gateway to Career Success</p>
                <div className="job-search-bar">
                    <input type="text" placeholder="Job Title or Company" className="search-input" />

                    <div className="divider"></div>

                    <select className="search-select">
                        <option disabled selected>Select Location</option>
                        <option>New York</option>
                        <option>London</option>
                        <option>Dhaka</option>
                    </select>

                    <div className="divider"></div>

                    <select className="search-select">
                        <option disabled selected>Select Category</option>
                        <option>Design</option>
                        <option>Development</option>
                        <option>Marketing</option>
                    </select>

                    <button className="search-btn">
                        Search Job
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Home;