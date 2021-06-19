import React from 'react';

// const Greet = ({name, age, children}) => {
const Greet = props => {
    const { name, age, children } = props;
    return (
        <div>
            <h1> Hello {name} is {age} years old. </h1>
            {children}
        </div>
        
    ) 
};

export default Greet;
