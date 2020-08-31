import React from 'react';
import Style from '../buttons/button.css';

const Button = (props) => {
    return (
    <button className={Style.button} onClick={props.click}>{props.name}</button>
    );
};



export default Button;