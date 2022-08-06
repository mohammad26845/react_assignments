import React from 'react'
import "./Wrapper.css";

const Wrapper = ({ children }) => {
    return (
        <div className="container my-4">
            <div className="calculator card">

                {children}

            </div>
            
        </div>
    );
}

export default Wrapper;