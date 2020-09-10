import React from 'react'
import { Book } from '../types'
import SpecialOfferCSS from './SpecialOffer.module.css'
import { WithAddToCartProps } from './AddToCart';
import OfferSVG from '../svg/sale.svg';

interface Props {
    book: Book;
}

const SpecialOffer: React.FC<Props> = ({ book }) => {

    return (
        <div className={SpecialOfferCSS.container}>
            <OfferSVG width={100} height={100} />
            <h2>{book.name}</h2>
            <p>{book.description}</p>
            <p>{book.price}$</p>
            <WithAddToCartProps>{({ addToCart }) => {
                return <button type="button" onClick={() => addToCart({ id: book.id, name: book.name, price: book.price })}>
                    Add to Cart
            </button>
            }}</WithAddToCartProps>

        </div>
    )
}

export default SpecialOffer;