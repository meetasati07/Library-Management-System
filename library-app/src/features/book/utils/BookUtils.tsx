import { JSX } from "react";
import { Book } from "../../../models/Book";
import { BookCheckout } from "../components/BookCheckout/BookCheckout";
import { BookCheckin } from "../components/BookCheckin/BookCheckin";

export function mapAuthorsToString(book:Book){
    let authors = "";

    for(let authors of book.authors){
        authors += authors;
        authors += ", "
    }

    return authors.slice(0, authors.length-2)
}

export function determineLoanModalContent(book:Book):JSX.Element{
    if(book.records.length === 0 || book.records[0].status === "AVAILABLE"){
        return <BookCheckout />
    }

    return <BookCheckin />
}