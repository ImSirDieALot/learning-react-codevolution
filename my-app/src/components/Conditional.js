import React, { Component } from 'react'

class Conditional extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }

        this.changeUser = this.changeUser.bind(this);
    }

    changeUser () {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }
    
    render() {

        return (
            <div>
                {this.state.isLoggedIn ? (<div>Welcome Sai</div>) : (<div>Welcome Guest</div>)}
                <div>
                    <button onClick={this.changeUser}>Log {this.state.isLoggedIn ? 'Out' : 'In'}</button>
                </div>
            </div>
                
                
        )



        // let message;
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Sai</div>
        // } else {
        //     message =  <div>Welcome Guest</div>
        // }

        // return message;

        // if(this.state.isLoggedIn) {
        //     return <div>Welcome Sai</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }
        
    }
}

export default Conditional
