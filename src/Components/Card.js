import '/.Card.css';

function Card(props){

    const claases= 'card' + props.children;
    
    return <div className={claases}>{props.children}</div>
}


export default Card; 