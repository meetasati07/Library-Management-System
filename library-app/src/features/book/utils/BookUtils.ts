import { Book } from "../../../models/Book";

export function mapAuthorsToString(book:Book){
    let authors = "";

    for(let authors of book.authors){
        authors += authors;
        authors += ", "
    }

    return authors.slice(0, authors.length-2)
}