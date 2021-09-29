import React from 'react';
import Subtotal from './Subtotal';
import '../css/checkout.css';
import {useStateValue} from '../StateProvider';
import ProductCart from './ProductCart';

function Checkout() {

    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="chekout__left">
                {
                    basket.length === 0 ? (
                        <div>
                            <h2 className="checkout__title">Your shopping basket is empty</h2>
                            <p>You have no items in your basket. Buy one.</p>
                        </div>
                    ) : 
                    <div>
                        <h2 className="shoppingbaskettitle">Items in the Shopping Basket</h2>
                        {
                            basket.map(item => (
                                <ProductCart
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    rating={item.rating}
                                    price={item.price}
                                 />
                            ))
                        }
                    </div>
                }
                
            </div>
            {
                basket.length > 0 && (
                    <div className="chekout__right">
                    <Subtotal />
                </div>
                )
            }
           

        </div>
    )
}

export default Checkout
