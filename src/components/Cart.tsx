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
        //using bind:
        // this.handleClick = this.handleClick.bind(this);
    }
    //using bind:
    // handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    //     this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    // }

    //as an arrow function:
    //in arrow functions the `this` keyword is bound to the context where the function is created
    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        //e.target is the element on which the event occured
        //Because the target can refer to any child element within the clicked element, TypeScript cannot figure out its type, and that's why
        //Typescript describes it using a type that's common to most HTML elements: the `EventTarget` interface
        //e.currentTarget is the element where the event handler is attached to
        console.log("e.target: ", e.target);
        console.log("e.currentTarget: ", e.currentTarget);

        if ((e.target as HTMLElement).nodeName === 'SPAN') {
            //now we can work with the target as with a span element. it has all the proprieties
            //in order to work with the target property, we can assert that the target is a particular HTML element
            //check the type definitions of the target before working with it
            let tempElement = (e.target as HTMLSpanElement);
            console.log(tempElement.offsetHeight)
        }
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    }

    render() {
        return (
            <div className={CartCSS.cartContainer}>
                <button className={CartCSS.button}
                    type="button"
                    onClick={this.handleClick}>
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