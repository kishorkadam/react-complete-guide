import React from 'react';
import './Person.css';

const person = (props) => {
    const style = {
        '@media (minwidth:500px)': {
            width: '450px'
        }
    }
    return (
        <div className='Person' style={style}>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old.
            {props.children}
            </p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person; 