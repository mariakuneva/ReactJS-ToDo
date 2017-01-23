import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  
  render() {
    return (
      <div className='container'>
        <h1>ToDo App</h1>
        <ul>
          <li><Link to='/todo'>ToDo</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        {/* добавили вывод потомков */}
        {this.props.children}
      </div>
    )
  }
}