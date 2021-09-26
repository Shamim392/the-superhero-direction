import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let total =0;
    for(const informations of cart){
        total = total + informations.salary;
    }
    return (
        <div className="cart">
            <h3>Added Items: {props.cart.length}</h3>
            <h4>Total Cost: ${total}</h4>
            <button className="regular-btn">Review Total</button>
        </div>
    );
};

export default Cart;