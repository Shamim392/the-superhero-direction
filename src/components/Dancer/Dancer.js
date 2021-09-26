import React from 'react';
import './Dancer.css'
const Dancer = (props) => {
    // console.log(props.dancer)
    return (
        <div>
            <h4>{props.img}</h4>
        </div>
    );
};

export default Dancer;