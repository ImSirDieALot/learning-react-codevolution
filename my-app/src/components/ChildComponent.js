// import React from 'react'

// function ChildComponent(props) {
//     return (
//         <div>
//             <button onClick={props.greetHandler}>Greet Parent</button>
//             <button onClick={() => props.greetHandler('from child')}>Greet Parent Arrow</button>
//         </div>
//     )
// }

// export default ChildComponent


import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>Greet Parent</button>
            <button onClick={() => props.greetHandler('child')}>Greet Parent Arrow</button>
        </div>
    )
}

export default ChildComponent