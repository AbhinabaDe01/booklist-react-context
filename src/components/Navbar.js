import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const Navbar = () => {

    const {books} = useContext(BookContext);

    console.log(books);

  return (
    <div className='navbar'>
        <h1>Memoire Booklist</h1>
        <p>Currently you have {books.length} number of books in your list...</p>
    </div>
  )
}

export default Navbar