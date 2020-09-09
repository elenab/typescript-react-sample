import React from 'react';
import BookCSS from './Book.module.css';
import BookSVG from '../svg/book.svg';

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
    return (
        <div>
            <li className={BookCSS.container}>
                <BookSVG width={40} height={40} />
                <h2>{book.name}</h2>
                <p>{book.description}</p>
                <p>{book.price}$</p>

            </li>

        </div>)
}

export default Book;