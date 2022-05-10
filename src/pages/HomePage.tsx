import { Link, Outlet } from 'react-router-dom';

function HomePage(): JSX.Element {
    return (
        <>
            <h1>Home page</h1>
            <Link to='/users' className='btn'>
                Users
            </Link>
            <Outlet />
        </>
    )
}
export default HomePage;
