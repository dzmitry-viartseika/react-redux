import TheHeader from "../components/TheHeader/TheHeader";
import { Outlet } from "react-router";

function SharedLayout(): JSX.Element {

    return (
        <>
            <TheHeader />
            <Outlet />
        </>
    )
}
export default SharedLayout;
