import React from 'react';
import Subtotal from './Subtotal';
import '../css/checkout.css';

function Checkout() {
    return (
        <div className="checkout">
            <div className="chekout__left">
                <h2 className="checkout__title">Your shopping basket is empty</h2>
                <p>You have no items in your basket. Buy one.</p>
            </div>
            <div className="chekout__right">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout
