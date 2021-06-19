import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello EventHandler'
        }

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler () {
        this.setState({
            message: 'Good bye'
        })
        console.log(this);
    }
    

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={() => this.clickHandler()}>Event Handler</button> */}
                <button onClick={this.clickHandler}>Event Handler</button>
            </div>
        )
    }
}

export default EventBind
