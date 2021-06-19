import React, { useState } from 'react';


function Counter(props) {

    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        setCount(a => a - 1);
    }

    const handleIncrement = () => {
        setCount(a => a + 1);
    }

    return (
        <div>
            <div>
                <button onClick={handleDecrement}>-</button>
                <h5>Count is {count}</h5>
                <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}


// class Counter extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             count: 0
//         }
//     }

//     increment() {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     decrement() {
//         this.setState({
//             count: this.state.count - 1
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <div>Count : {this.state.count}</div>
//                 <button onClick= { () => this.increment()}>Increment</button>
//                 <button onClick= { () => this.decrement()}>Decrement</button>
//             </div>
//         )
//     }
// }

export default Counter