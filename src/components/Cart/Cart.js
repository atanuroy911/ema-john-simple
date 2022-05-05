import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let shipping = 0;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = total * 0.1;
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <div>
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
            </div>
            <div>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shipping}</p>
            </div>
            <div>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p><b>Grand Total: ${grandTotal}</b></p>
            </div>
        </div>
    );
};

export default Cart;