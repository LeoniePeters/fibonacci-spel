import React from 'react';

function renderCell(cellObject) {
  return (
    <td className='cellData' key={`${cellObject.row}-${cellObject.column}`}>
      {cellObject.number === 0 ? '' : cellObject.number}
    </td>
  )
}

export default function Fibonacci({ grid }) {
  return (
    <div>
      <h1>Fibonacci spel</h1>
      <table className='grid-container'>
        <tbody>
          {grid.map((gridRow, gridRowIndex) => <tr className='tableRow'
            key={gridRowIndex}>
            {gridRow.map(gridCell => renderCell(gridCell))}</tr>)}
        </tbody>
      </table>
    </div>
  )
}

/* <button
      className='cellButton'
      key={`${cellObject.row}-${cellObject.column}`}> */
/* </button> */