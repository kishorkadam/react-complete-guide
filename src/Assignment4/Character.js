import React from 'react';

const Character = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center',
        boxShadow: '0 2px 3px #333',
        fontWeight: 'bold'
    }

    return (
        < div style={style} onClick={props.clicked}>
            <p>{props.input}</p>
        </div >
    );
}

export default Character;