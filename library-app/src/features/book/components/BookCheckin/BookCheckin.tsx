import React from "react";

import './BookCheckin.css'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
import { checkinBook, setCurrentBook } from "../../../../redux/slices/BookSlice";
import { setDisplayLoan } from "../../../../redux/slices/ModalSlices";

export const BookCheckin:React.FC = () => {
    const user = useSelector((state:RootState) => state.authentication.loggedInUser)
    const book = useSelector((state:RootState) => state.book.currentBook)

    const dispatch:AppDispatch = useDispatch()

    const checkin = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(book && user){
            dispatch(checkinBook({
                book,
                employee:user
            }))
        dispatch(setCurrentBook(undefined))
        dispatch(setDisplayLoan(false))
        }
    }

    return(
        <div className="book-checkout">
            {
                book && user && 
                <form className="book-checkin-form">
                    <h3>Check In Book Titled: {book.title}</h3>
                    <h4>Checkout Employee ID: </h4>
                    <input className="book-checkin-input" value={user._id} disabled/>
                    <button className="book-checkin-button" onClick={checkin}>Check In Book</button>                    
                </form>
            }
        </div>
    )
}