import React from 'react';
import { Link } from 'react-router-dom';

const Regsitration = () => {


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log(data);
    }

    return (
        <div className='regsitration'>
            <div className="reg-content">
                <h3>Create an account.</h3>
                <p>Already have an account? <Link to='/login'><span style={{ color: '#2e9c91' }}>Login</span></Link></p>
                <form onSubmit={handleSubmit} className='reg-form'>
                    <div className="name">
                        <input type="text " name='name' placeholder='Full Name *' />
                        <input type="text " name='username' placeholder='Username' />
                    </div>
                    <input type="email" name='email' placeholder='Email' /> <br />
                    <input type="password" name='password' placeholder='Password' /> <br />
                    <input type="password" name='confirmPassword' placeholder='Confirm Password' />
                    <button type='submit'>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Regsitration;