import { Link, Outlet } from 'react-router-dom';
import React from 'react';


function HomePage(): JSX.Element {
    return (
        <>
            <Link to='/users' className='btn'>
                Users
            </Link>
            <h1>Home Page</h1>
            <Outlet />
        </>
    )
}
export default HomePage;
