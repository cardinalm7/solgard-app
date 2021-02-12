import React from "react";

const L = {
  p: { key: 'purple', color: 'purple' },
  P: { key: 'purple-e', color: 'violet' },
  g: { key: 'green', color: 'green' },
  r: { key: 'red', color: 'red' },
  y: { key: 'yellow', color: 'yellow' },
  e: { key: 'empty', color: '#eee' },
  b: { key: 'boss', color: 'black' },
  m: { key: 'minion', color: 'cyan' },
  w: { key: 'wolf', color: 'gray' },
}

const process = (mat) => {
  return mat.map(m => m.split(' '));
};

export const Matrix = ({ matrix }) => {
  return (
    <div className='matrix-con'>
      <div className='matrix'>
        {process(matrix).map(((c, i) => (
          <div className='column' key={`column-${i}`}>
            {c.map((l, n) => (
              <div className={`cell ${L[l].key}`}
                key={`cell-${L[l].key}-${n}`}
              >
                {/* {L[l].key} */}
              </div>
            ))}
          </div>
        )))}
      </div>
    </div>
  )
}