import React, { Component } from 'react';
import './Fibonacci.css'
import Fibonacci from './Fibonacci'
import FibonacciCheck from '../FibonacciCheck/FibonacciCheck'

export default class FibonacciContainer extends Component {
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
    //Reset Fibonacci cells to zero
    //Reset animation so they run upon the next click
    this.setState((state) => {
      const grid = [...state.grid]
      grid.forEach(row0 => row0.forEach(
        cell0 => {
          if (cell0.color === 'green 1s linear 2 alternate') {
            cell0.number = 0;
            cell0.color = ''
          } else { cell0.color = '' }
        }))
      return grid
    })
  }

  handleOnClick = (event) => {
    //Get row and column from id of clicked element
    const cellRowCol = event.target.id.split('-')
    const gridRow = Number(cellRowCol[0])
    const gridCol = Number(cellRowCol[1])
    //Edit grid
    this.setState((state) => {
      const grid = [...state.grid]
      //Each cell in clicked row +1 and yellow
      grid[gridRow].forEach(cell1 => {
        cell1.number++;
        cell1.color = 'yellow 0.2s linear 2 alternate'
      })
      //Each cell in clicked column +1 and yellow
      grid.forEach(row1 => {
        const cell2 = row1.find(cell3 => cell3.column === gridCol)
        cell2.number++;
        cell2.color = 'yellow 0.2s linear 2 alternate'
      })
      //Correct double +1 for clicked cell
      grid[gridRow].find(cell4 => cell4.column === gridCol).number--
      //Check if rows contain Fibonacci sequence
      //If so loop over sequence and make green
      grid.forEach(row2 => {
        const fibonacciIndexes = FibonacciCheck(row2)
        if (fibonacciIndexes.length > 0) {
          fibonacciIndexes.forEach(fiboInfo => {
            const fiboInfoArray = fiboInfo.split('-')
            const startIndex = Number(fiboInfoArray[0])
            const lastIndex = (startIndex + Number(fiboInfoArray[1]))
            for (let k = startIndex; k < lastIndex; k++) {
              row2[k].color = 'green 1s linear 2 alternate'
            }
          })
        }
      }
      )
      return grid
    })
    //Green animation runs for 2 sec. Then reset cells (see up ^)
    setTimeout(
      this.resetCells, 2000);
  }

  render() {
    return (
      <Fibonacci grid={this.state.grid} handleOnClick={this.handleOnClick} color={this.state} />
    )
  }
}