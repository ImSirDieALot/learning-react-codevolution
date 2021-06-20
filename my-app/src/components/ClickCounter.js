import React, {Component} from 'react'
import withCounter from './withCounter';

class ClickCounter extends Component {

  render() {
    const {count, incrementCount, decrementCount} = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          +
        </button>
        <h1>{count}</h1>
        <button onClick={decrementCount}>
          -
        </button>
      </div>
    )
  }
}

export default withCounter(ClickCounter)
