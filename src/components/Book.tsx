import React from 'react'
import BookCSS from './Book.module.css'

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
        <li className={BookCSS.container}>
            <h2>{book.name}</h2>
            <p>{book.description}</p>
            <p>{book.price}$</p>

        </li>)
}

export default Book;