import React from 'react';

function renderCell(cellObject, handleOnClick) {
  return (
    <td className='cellData'
      id={`${cellObject.row}-${cellObject.column}`}
      key={`${cellObject.row}-${cellObject.column}`}
      onClick={handleOnClick}
      style={{ animation: cellObject.color }}>
      {cellObject.number === 0 ? '' : cellObject.number}
    </td>
  )
}

export default function Fibonacci({ grid, handleOnClick }) {
  return (
    <div className='fibonacciComponent'>
      <h1 id='fibonacciTitle'>Fibonacci spel</h1>
      <table className='grid-container'>
        <tbody>
          {grid.map((gridRow, gridRowIndex) =>
            <tr className='tableRow'
              key={gridRowIndex}>
              {gridRow.map(gridCell =>
                renderCell(gridCell, handleOnClick))}</tr>)}
        </tbody>
      </table>
    </div>
  )
}
