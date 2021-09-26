import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Dancer from '../Dancer/Dancer';
import './Information.css'
const Information = () => {
    const [infomation,setInformation] = useState([]);
    const [cart,setCart] =useState([]);
    useEffect(() => {
        fetch('./generated.JSON')
        .then(res => res.json())
        .then(data => setInformation(data))
    })
    const handleAddToCart = (informations) => {
        // console.log(informations.name)
        const newCart =[...cart,informations];
        setCart(newCart);
    }
    return (
        <div className="information-container">
            <div className="info-container">
                {/* <h3>Information: {infomation.length}</h3> */}
                {
                    infomation.map(informations => <Dancer 
                        key ={informations.key}
                        informations ={informations}
                        handleAddToCart= {handleAddToCart}
                    ></Dancer>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Information;