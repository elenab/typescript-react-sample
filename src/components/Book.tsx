import React from 'react';
import BookCSS from './Book.module.css';
import BookSVG from '../svg/book.svg';
import { Book } from '../types'
import { useAddToCart } from './AddToCart';

interface Props {
    book: Book;
};
const BookItem: React.FC<Props> = ({ book }) => {
    const addToCart = useAddToCart();
    const handleAddToCartClick = () => {
        addToCart({id: book.id, name: book.name, price: book.price});
    };
    return (
        <div>
            <li className={BookCSS.container}>
                <BookSVG width={40} height={40} />
                <h2>{book.name}</h2>
                <p>{book.description}</p>
                <p>{book.price}$</p>
                <button type="button" onClick={handleAddToCartClick}>
                    Add to Cart
                </button>
            </li>

        </div>)
}

export default BookItem;