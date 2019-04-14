import React, { Component } from 'react';
import './Fibonacci.css'
import Fibonacci from './Fibonacci'

class FibonacciContainer extends Component {
  state = {}

  componentWillMount() {
    /*This loop creates a grid. Each nested array resembles a row cells. 
    Each array element is an object containing info about the row, column and 
    (display)number for that cell.*/
    const grid = [];
    for (let i = 0; i < 50; i++) {
      grid.push([]);
      for (let j = 0; j < 50; j++) {
        grid[i].push({ row: i, column: j, number: 0 })
      }
    }
    this.setState({ grid })

  }

  render() {
    console.log(this.state)
    return (
      <Fibonacci grid={this.state.grid} />
    )
  }
}

export default FibonacciContainer;
