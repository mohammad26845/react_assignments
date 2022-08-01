import React, { useState } from 'react'

export const Progressbar = () => {

    const [percentage, setPercentage] = useState('50');

    const updateValue = (e) => {
        setPercentage(e.target.value);
    }


    return (
        <>
            <input type='number' onChange={updateValue}></input>

            <div className="progress">
                <div className="progress-bar bg-success-custom" role="progressbar" style={{ width: `${percentage}%`, height: '30px' }}
                    aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">

                </div>
            </div>
        </>

    )
}
