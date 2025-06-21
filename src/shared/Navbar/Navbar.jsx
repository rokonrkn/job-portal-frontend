import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {

    const navItem = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Jobs',
            path: '/jobs'
        },
        {
            name: 'About Us',
            path: '/about'
        },
        {
            name: 'Contact',
            path: '/contact'
        }
    ]

    return (
        <div className='navbar container'>
            <div className="logo">Rokon</div>

            <div className="nav-item">
                {navItem.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>


            <div className="button">
               <Link to='/login'><button className='btn1'>Login</button></Link>
                <Link to='/register'><button className='btn2'>Register</button></Link>
            </div>
        </div>
    );
};

export default Navbar;