import React from 'react'
import { useState, createContext, useEffect } from 'react';
import uuid from 'react-uuid'

export const BookContext = createContext();

export const BookProvider = ({children}) => {

    // const [books, setBooks] = useState([
    //     { title: "The Witcher", author: "Andrzej Sapkowski", id: 1},
    //     { title: "The Alchemist", author: "Paulo Coelho", id: 2}
    // ])

    const [books, setBooks] = useState(() => {
        const booksData = localStorage.getItem('books');
        
        if(booksData) {
            return JSON.parse(booksData);
        } else {
            return [];
        }
    })

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])

    const addBook = (title, author) => {
        setBooks([...books, { title: title, author: author , id: uuid()}])
    }

    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{ books, addBook, deleteBook }}>
            {children}
        </BookContext.Provider>
    )
}
