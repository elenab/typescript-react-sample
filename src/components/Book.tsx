import React from 'react';
import BookCSS from './Book.module.css';
import BookSVG from '../svg/book.svg';
import { useSetState  } from './AppState'

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
    const setState = useSetState();
    const handleAddToCartClick = () => {
        setState((state) => {
          const itemExists = state.cart.items.find((item) => item.id === book.id);
          return {
            ...state,
            cart: {
              ...state.cart,
              items: itemExists
                ? state.cart.items.map((item) => {
                    if (item.id === book.id) {
                      return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                  })
                : [
                    ...state.cart.items,
                    {
                      id: book.id,
                      name: book.name,
                      price: book.price,
                      quantity: 1,
                    },
                  ],
            },
          };
        });
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