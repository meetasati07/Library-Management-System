import React, {useEffect, useRef} from "react";

import './RegisterForm.css'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
import { registerUser, resetRegisterSuccess } from "../../../../redux/slices/AuthenticationSlice";

interface RegisterFormProps {
    toggleLogin():void
}

export const RegisterForm:React.FC<RegisterFormProps> = ({toggleLogin}) => {
    
    const authState = useSelector((state:RootState) => state.authentication)
    const dispatch:AppDispatch = useDispatch();

    const firstRef = useRef<HTMLInputElement>(null);
    const lastRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleRegisterUser = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(
            firstRef && firstRef.current &&
            lastRef && lastRef.current &&
            emailRef && emailRef.current &&
            passwordRef && passwordRef.current
        ) {
            dispatch(
                registerUser({
                    type: 'PATRON',
                    firstName: firstRef.current.value,
                    lastName: lastRef.current.value,
                    email: emailRef.current.value,
                    password: passwordRef.current.value
                })
            )
        }
    }

    useEffect(() => {
        return (() => {
            dispatch(resetRegisterSuccess())
        })
    }, [])

    return  (
        <form action="" className="register-form">
            <h2>Enter your Information</h2>
            {authState.error ? <p className="register-form-error">There was an error</p> : <></>}
            <div className="register-form-name-input-group">
                <h6>First Name</h6>
                <input className="register-form-input-name"  placeholder="first" name="first" required ref={firstRef}/>
            </div>
            <div className="register-form-name-input-group">
                <h6>Last Name</h6>
                <input className="register-form-input-name"  placeholder="last" name="last" required ref={lastRef}/>
            </div>
            <div className="register-form-input-group">
                <h6>Email</h6>
                <input className="register-form-input"  placeholder="email" name="email" required ref={emailRef}/>
            </div>
            <div className="register-form-input-group">
                <h6>Password</h6>
                <input className="register-form-input"  placeholder="password" name="password" type="password" required ref={passwordRef}/>
            </div>
            <button className="register-form-submit" onClick={handleRegisterUser}>Register</button>
            {authState.registerSuccess ?
                <p>Register Susseccfully.
                    <span className="register-form-login" onClick={toggleLogin}>Login Here.</span>
                </p> : <></>
            }
        </form>
    )
}