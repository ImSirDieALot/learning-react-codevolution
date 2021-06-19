import React from 'react';

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
    return (
        <div>
            <h1 style={heading}>INLINE</h1>
            <h1 className='error'>Error</h1>
        </div>
    )
}

export default Inline
