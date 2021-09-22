import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Nevem {props.name}, korom: {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;