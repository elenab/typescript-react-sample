import React from 'react';
import books from '../data/kids-books.json';
import Cart from './Cart';
import AppCSS from './App.module.css';
import BooksSVG from '../svg/books.svg';
import AppStateProvider from './AppState'
import BookItem from './Book';
import SpecialOffer from './SpecialOffer';

const App = () => {
    const specialOfferBook = books.find( (book) => book.specialOffer);
    return (
        <AppStateProvider>
            <div className={AppCSS.container}>
                <div className={AppCSS.header}>
                    <BooksSVG width={120} height={120} />
                    <div className={AppCSS.siteTitle}>Wonderful Books</div>
                    <Cart />
                </div>
                {specialOfferBook && <SpecialOffer book={specialOfferBook} /> }
                <ul className={AppCSS.bookList}>
                    {books.map(book => {
                        return <BookItem key={book.id} book={book} />
                    })}
                </ul>
            </div>
        </AppStateProvider>
    );
}

export default App;