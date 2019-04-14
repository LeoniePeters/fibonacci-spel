import React, { Component } from 'react';
import Fibonacci from './Fibonacci'

class FibonacciContainer extends Component {
  state = {}

  componentWillMount() {
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
      <Fibonacci />
    )
  }
}

export default FibonacciContainer;
