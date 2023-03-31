import React, { useState, useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {

    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
        type='text'
        placeholder='book-title'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
        />
        <input 
        type='text'
        placeholder='author'
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
        required
        />
        <button type='submit'>Add Book</button>
    </form>
  )
}

export default BookForm