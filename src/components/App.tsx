import React from 'react'
import books from '../data/kids-books.json'
import Book from './Book'
import AppCSS from './App.module.css'

const App = () => {
    return (
        <div className={AppCSS.container}>
            <ul>
                {books.map(book => {
                    return <Book key={book.id} book={book} />
                })}
            </ul>
        </div>
    );
}

export default App;