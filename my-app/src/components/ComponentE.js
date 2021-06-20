import React, { Component } from 'react'
import ComponentC from './ComponentC'
import ComponentF from './ComponentF'
import userContext from './userContext'

class ComponentE extends Component {
  render() {
    return (
      <div>
      Component E context {this.context}
        <ComponentF />
      </div>
      
    ) 
  }
}

ComponentE.contextType = userContext
export default ComponentE
