import React from 'react';

const person = () => {
    return <p>Üdvözlet a Person komponensből Véletlen szám 1 és 6 között: {Math.floor(Math.random() * 6 + 1)}</p>;
};

export default person;