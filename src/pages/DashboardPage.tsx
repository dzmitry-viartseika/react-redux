import { Outlet } from 'react-router-dom';

function DashboardPage(): JSX.Element {
    return (
        <div>
            <h1>DashboardPage</h1>
            <Outlet />
        </div>
    )
}
export default DashboardPage;
