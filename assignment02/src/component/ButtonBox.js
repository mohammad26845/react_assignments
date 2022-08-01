import React from 'react'
import './ButtonBox.css'

const ButtonBox = ({ children }) => {
    return (
        <div className="calculator-keys">
            {children}
        </div>
    )
}

export default ButtonBox;