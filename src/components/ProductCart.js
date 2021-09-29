import React from 'react';
import '../css/productcart.css';
import { useStateValue } from '../StateProvider';

function ProductCart({id, title, price, rating, image}) {
    const [{basket}, dispatch] = useStateValue();

    const removeItem = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id
        })
    }
    return (
        <div className="productcart">
            <img className="productcart__image" src={image} alt="" />
            <div className="productcart__info">
                <p className="productcart__title">{title}</p>
                <p className="productcart__price">${price}</p>
            
            <div className="productcart__rating">
                {
                    Array(rating).fill().map((_) => (
                        <span>*</span>
                    ))
                }
            </div>
            <button onClick={removeItem}>Remove from the cart</button>
        </div>
        </div>
    )
}

export default ProductCart
