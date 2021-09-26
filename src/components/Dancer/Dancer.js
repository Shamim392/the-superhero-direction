import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Dancer.css'
const Dancer = (props) => {
    // console.log('clicked')
    const {img,name,age,gender,salary,phone,email} =props.informations;
    const buttonIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="grid">
            <img className="image" src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Gender: {gender}</p>
            <p>Age: {age}</p>
            <p>Salary: {salary}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <button 
            onClick={() => props.handleAddToCart(props.informations)}
                className="regular-btn">{buttonIcon } Add to Cart</button>
        </div>
    );
};

export default Dancer;