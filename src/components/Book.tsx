import React from 'react';
import BookCSS from './Book.module.css';
import BookSVG from '../svg/book.svg';
import { useStateDispatch } from './AppState'

interface Book {
    id: number;
    name: string;
    description: string;
    price: number;
}

interface Props {
    book: Book;
}
const Book: React.FC<Props> = ({ book }) => {
    const dispatch = useStateDispatch();
    const handleAddToCartClick = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                item: {
                    id: book.id, name: book.name, price: book.price
                }
            }
        })
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

export default Book;