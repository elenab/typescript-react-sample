import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import CartCSS from './Cart.module.css';

interface Props { }

interface State {
    isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    render() {
        return (
            <div className={CartCSS.cartContainer}>
                <button className={CartCSS.button} type="button" onClick={() => {
                    this.setState((prevState) => ({isOpen: !prevState.isOpen}));
                }}>
                    <FiShoppingCart />
                    <span>2 book(s)</span>
                </button>
                <div className={CartCSS.cartDropDown} 
                style={{
                    display: this.state.isOpen ? 'block' : 'none',
                }}>
                    <ul>
                        <li>Bad Kitty: Camp Daze</li>
                        <li>Bad Kitty Goes to the Vet</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Cart;