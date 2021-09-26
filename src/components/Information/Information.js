import React, { useEffect, useState } from 'react';
import Dancer from '../Dancer/Dancer';
import './Information.css'
const Information = () => {
    const [infomation,setInformation] = useState([]);
    useEffect(() => {
        fetch('./generated.JSON')
        .then(res => res.json())
        .then(data => setInformation(data))
    })
    return (
        <div className="information-container">
            <div className="info-container">
                {/* <h3>Information: {infomation.length}</h3> */}
                {
                    infomation.map(informations => <Dancer 
                        informations ={informations}
                    ></Dancer>)
                }
            </div>
            <div className="cart-container">
                <h3>Added dancer: </h3>
                <h4>Total Cost: $</h4>
            </div>
        </div>
    );
};

export default Information;