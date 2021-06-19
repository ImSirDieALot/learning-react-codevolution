import React, { Component } from 'react';

class Message extends Component {

    constructor () {
        super()
        this.state = {
            message: 'Welcome Visitor',
            subscribe: 'Subscribe'
        }
    }

    subscribe () {
        this.setState({
            message:'Thank you for subscribing',
            unsubscribe: 'Unsubscibe'
        })
    }

    unsubscribe () {
        this.setState({
            message: 'Welcome Visitor',
            subscribe: 'Subscribe'
        })
    }

    render() {
        if(this.state.message === 'Thank you for subscribing') {
            return (
                <div>
                    <h1> {this.state.message} </h1>
                    <button onClick={ () => this.unsubscribe()}> {this.state.unsubscribe} </button>
                </div>
            )
        }
        if(this.state.message === 'Welcome Visitor') {
            return (
                <div>
                    <h1> {this.state.message} </h1>
                    <button onClick={ () => this.subscribe()}> {this.state.subscribe} </button>
                </div>
            )
        }
    }
};

export default Message;