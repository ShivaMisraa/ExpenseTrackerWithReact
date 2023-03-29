import React from 'react';
import './Card.css';

const Card= (props) =>{

    const claases= 'card' + props.className;
    
    return <div className={claases}>{props.children}</div>
}


export default Card; 
