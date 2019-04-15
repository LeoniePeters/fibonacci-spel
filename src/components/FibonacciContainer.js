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

  resetCells = () => {
    this.setState((state) => {
      const grid = [...state.grid]
      grid.forEach(row => row.forEach(
        cell => {
          if (cell.color === 'green 1s linear 2 alternate') {
            cell.number = 0;
            cell.color = ''
          } else { cell.color = '' }
        }))
      return grid
    })
  }

  handleOnClick = (event) => {
    const cellRowCol = event.target.id.split('-')
    const row = Number(cellRowCol[0])
    const col = Number(cellRowCol[1])
    this.setState((state) => {
      const grid = [...state.grid]
      grid[row].forEach(e => {
        e.number++;
        e.color = 'yellow 0.2s linear 2 alternate'
      })
      grid.forEach(e1 => {
        const cell = e1.find(e2 => e2.column === col)
        cell.number++;
        cell.color = 'yellow 0.2s linear 2 alternate'
      })
      grid[row].find(e => e.column === col).number--
      //
      grid.forEach(row => {
        const fibonacciIndexes = FibonacciCheck(row)
        if (fibonacciIndexes.length > 0) {
          fibonacciIndexes.forEach(fiboInfo => {
            const fiboInfoArray = fiboInfo.split('-')
            const startIndex = Number(fiboInfoArray[0])
            const lastIndex = (startIndex + Number(fiboInfoArray[1]))
            for (let k = startIndex; k < lastIndex; k++) {
              row[k].color = 'green 1s linear 2 alternate'
            }
          })
        }
      }
      )
      return grid
    })
    setTimeout(
      this.resetCells, 2000);
  }

  render() {
    return (
      <Fibonacci grid={this.state.grid} handleOnClick={this.handleOnClick} color={this.state} />
    )
  }
}

export default FibonacciContainer;
