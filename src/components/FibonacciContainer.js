import React, { Component } from 'react';
import './Fibonacci.css'
import Fibonacci from './Fibonacci'
import FibonacciCheck from '../FibonacciCheck/FibonacciCheck'

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
        grid[i].push({ row: i, column: j, number: 0, color: '' })
      }
    }
    this.setState({ grid })
  }

  resetColor = () => {
    this.setState((state) => {
      const grid = [...state.grid]
      grid.forEach(row => row.forEach(cell => cell.color = ''))
      return grid;
    })
  }

  handleOnClick = (event) => {
    const cellRowCol = event.target.id.split('-')
    const row = Number(cellRowCol[0])
    const col = Number(cellRowCol[1])
    this.setState((state) => {
      const grid = [...state.grid]
      grid[row].forEach(e => { e.number++; e.color = 'yellow 0.5s linear 2 alternate' })
      grid.forEach(e1 => {
        const cell = e1.find(e2 => e2.column === col)
        cell.number++;
        cell.color = 'yellow 0.5s linear 2 alternate'
      })
      grid[row].find(e => e.column === col).number--
      //
      grid.forEach(row => {
        const fibonacciIndex = FibonacciCheck(row)
        if (fibonacciIndex) {
          for (let k = fibonacciIndex; k < (fibonacciIndex + 5); k++) {
            row[k].color = 'green 0.5s linear 2 alternate'
            row[k].number = 0
          }
        }
      }
      )
      return grid
    })
    setTimeout(
      this.resetColor, 1000);
  }

  render() {
    // console.log(this.state)
    return (
      <Fibonacci grid={this.state.grid} handleOnClick={this.handleOnClick} color={this.state} />
    )
  }
}

export default FibonacciContainer;
