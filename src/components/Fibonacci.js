import React from 'react';

function renderCell(cellObject) {
  return (
    <button
      className={cellObject.column}
      key={`${cellObject.row}-${cellObject.column}`}>
      {cellObject.number}
    </button>
  )
}

export default function Fibonacci({ grid }) {
  return (
    <div>
      <h1>Fibonacci spel</h1>
      <div className='grid-container'>
        {grid.map((gridRow, gridRowIndex) => <div key={gridRowIndex}>
          {gridRow.map(gridCell => renderCell(gridCell))}</div>)}
      </div>
    </div>
  )
}