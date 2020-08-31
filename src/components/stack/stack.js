import React from 'react';
import Style from '../stack/stack.css';

const Stack = (props) => {
    return (
    <div className={Style.element}>{props.textTyle} {props.num}</div>
    );
};



export default Stack;