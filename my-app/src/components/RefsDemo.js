import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.cbRef = null;

        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }

    componentDidMount() {
        if(this.cbRef) {
            this.cbRef.focus()
        }
        // console.log(this.inputRef);
        // this.inputRef.current.focus()
    }
    clickHandler = () => {
        console.log(this.inputRef.current.value);
    }
    
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
                <input type='text' ref={this.setCbRef}></input>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
