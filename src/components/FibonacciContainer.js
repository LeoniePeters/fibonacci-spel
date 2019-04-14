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

  handleOnClick = (event) => {
    const cellRowCol = event.target.id.split('-')
    const row = Number(cellRowCol[0])
    const col = Number(cellRowCol[1])
    this.setState((state) => {
      const grid = [...state.grid]
      grid[row].forEach(e => e.number++)
      grid.forEach(e1 => e1.find(e2 => e2.column === col).number++)
      return grid
    })
  }

  render() {
    return (
      <Fibonacci grid={this.state.grid} handleOnClick={this.handleOnClick} />
    )
  }
}

export default FibonacciContainer;
