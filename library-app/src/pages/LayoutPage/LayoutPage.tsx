import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import './LayoutPage.css'
import { RootState } from "../../redux/ReduxStore";
import { LoginRegisterModal } from "../../features/authentication";


export default function LayoutPage(){

    const state = useSelector((state:RootState) => state.modal)

    return(
        <div className="layout-page">
            {state.displayLogin && <LoginRegisterModal />}
            <h1>NAV BAR</h1>
            <Outlet />
            <h1>FOOTER</h1>
        </div>
    )
}