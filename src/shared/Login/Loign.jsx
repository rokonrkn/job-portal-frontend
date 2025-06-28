import React from 'react';
import { Link } from 'react-router-dom';

const Loign = () => {
    return (
        <div className='regsitration'>
            <div className="reg-content">
                <h3 className='text-center'>Login</h3>
                <form  className='reg-form '>
                    <input type="email" name='email' placeholder='Email' /> <br />
                    <input type="password" name='password' placeholder='Password' /> <br />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Loign;