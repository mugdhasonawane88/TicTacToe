import React from 'react';
import './Cell.css';

function Cell({rowIndex, cellIndex, cellValue, playFn}) {
  return (
      <span role="cell" className="cell" onClick={() => playFn(rowIndex, cellIndex)}>
        {cellValue}
      </span>
   
  );
}

export default Cell;
