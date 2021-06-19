import React from 'react';

const HelloTwo = () => {
    return React.createElement(
        'div', 
        { 
            id: 'hello',
            className: 'helloClass'
        }, 
        React.createElement('h1', null, 'Hello Sai, this is without JSX'))
};

export default HelloTwo;