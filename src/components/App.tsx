import React from 'react';
import books from '../data/kids-books.json';
import Book from './Book';
import Cart from './Cart';
import AppCSS from './App.module.css';
import BooksSVG from '../svg/books.svg';

const App = () => {
    return (
        <div className={AppCSS.container}>
            <div className={AppCSS.header}>
                <BooksSVG width={120} height={120} />
                <div className={AppCSS.siteTitle}>Wonderful Books</div>
                <Cart />
            </div>
            <ul>
                {books.map(book => {
                    return <Book key={book.id} book={book} />
                })}
            </ul>
        </div>
    );
}

export default App;