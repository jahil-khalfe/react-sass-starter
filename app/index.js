import React, {Component} from 'react'
import {render} from 'react-dom'
import Module from './module'
import './index.scss'

/** @state */
/** @lifecycle event */
/** @UI */
class App extends Component {
  render(){
    return (
      <div>
        <Module/>
        <h1>React Sass Starter</h1>
      </div>
    )
  }
}

render(
  <App/>,document.getElementById('app')
)
