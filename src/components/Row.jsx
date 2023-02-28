import React from 'react'
import { rows } from '../utils/Data'

function Row() {
  return (
    <div>
        {rows.map((row) =>(
            <button>{row}</button>
        ))}
    </div>
  )
}

export default Row