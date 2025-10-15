import React from "react";

import './BookInfo.css'
import { Book } from "../../../../models/Book";
import { mapAuthorsToString } from "../../utils/BookUtils";

interface BookInfoProps {
    book: Book;
}

export const BookInfo:React.FC<BookInfoProps> = ({book}) => {
    return (
        <div className="book-info">
            <div className="book-info-container">
                <img src={book.cover} className="book-info-cover" />
                <div>
                    <h2>{book.title}</h2>
                    <h3>{mapAuthorsToString(book)}</h3>
                    <p>{book.description}</p>
                </div>
            </div>
        </div>
    )
}