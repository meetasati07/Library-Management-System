import { Request, Response } from "express";
import { findAllBooks, registerBook, modifyBook, removeBook, queryBooks } from "../services/BookService";

import { IBook } from "../models/Book";
import { IBookModel } from "../daos/BookDao";
import { count } from "console";
import { BookDoesNotExistError } from "../utils/LibraryErrors";

async function getAllBooks(req:Request, res:Response) {
    try{
        let books = await findAllBooks()
        res.status(200).json({message: "Retrieved all books", count:books.length, books})
    } catch(error:any){
        res.status(500).json({message: "Unable to retrieve books at this time", error})
    }
}

async function createBook(req:Request, res:Response) {
    let book = req.body

    try{
        let savedBook = await registerBook(book)
        res.status(201).json({message: "Books created successfully", savedBook})
    } catch(error:any){
        res.status(500).json({message: "Unable to save books at this time", error})
    }
}

async function updateBook(req:Request, res:Response) {
    let book = req.body

    try{
        let updatedBook = await modifyBook(book)
        res.status(202).json({message: "Books updated successfully", updatedBook})
    } catch(error:any){
        if(error instanceof BookDoesNotExistError){
            res.status(404).json({message: "Cannot update book that does not exist", error})
        } else{
            res.status(500).json({message: "Unable to update books at this time", error})
        }
    }
}

async function deleteBook(req:Request, res:Response) {
    let {barcode} = req.params

    try{
        let message = await removeBook(barcode)
        res.status(202).json({message})
    } catch(error:any){
        if(error instanceof BookDoesNotExistError){
            res.status(404).json({message: "Cannot delete book that does not exist", error})
        } else{
            res.status(500).json({message: "Unable to delete books at this time", error})
        }
    }
}

async function searchForBooksByQuery(req:Request, res:Response) {
    let {title, barcode, author, description, subject, genre, page = 1, limit = 25} = req.query;

    let books = await queryBooks(
        Number(page),
        Number(limit),
        title as string,
        barcode as string,
        description as string,
        author as string,
        subject as string,
        genre as string
    )

    res.status(200).json({message: "Retrieved books from query", page: books})
}

export default {getAllBooks, createBook, updateBook, deleteBook, searchForBooksByQuery}