import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let shipping = 0;
    let total = 0;
    let quantity = 0;
    console.log(quantity);
    for(const product of cart){
        console.log(product.quantity);
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <div>
                <h4>Order Summary</h4>
                <p>Selected Items: {quantity}</p>
            </div>
            <div>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shipping}</p>
            </div>
            <div>
                <p>Tax: ${tax}</p>
                <p><b>Grand Total: ${grandTotal.toFixed(2)}</b></p>
            </div>
        </div>
    );
};

export default Cart;