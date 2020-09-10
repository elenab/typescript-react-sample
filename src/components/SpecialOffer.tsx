import React from 'react'
import { Book } from '../types'
import SpecialOfferCSS from './SpecialOffer.module.css'
import { withAddToCart, AddToCartProps } from './AddToCart';

interface Props extends AddToCartProps {
    book: Book;
}

const SpecialOffer: React.FC<Props> = ({ book, addToCart }) => {
    const handleAddToCartClick = () => {
        addToCart({id: book.id, name: book.name, price: book.price});
    };

    return (
        <div className={SpecialOfferCSS.container}>
            <h2>{book.name}</h2>
            <p>{book.description}</p>
            <p>{book.price}$</p>
            <button type="button" onClick={handleAddToCartClick}>
                Add to Cart
                </button>
        </div>
    )
}

export default withAddToCart(SpecialOffer);