import React from 'react'
import './Screen.css'

export const Screen = ({ value }) => {

  return (
    <input type="text" className="calculator-screen z-depth-1" value={value} disabled />
  )
}
