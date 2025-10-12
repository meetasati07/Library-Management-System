import { LoginForm } from "../../features/authentication/components/LoginForm/LoginForm";
import type { JSX } from "react";
import type { User } from "../../models/User";

interface HomePageProps {
    displayLogin: boolean
    updateLoggedInUser(user:User):void
}

export default function HomePage(props:HomePageProps):JSX.Element {
    return(
        <div className="page">
            Home Page
            {props.displayLogin ? <LoginForm updateLoggedInUser={props.updateLoggedInUser} /> : <></>}
        </div>
    )
}