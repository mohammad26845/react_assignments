import React from 'react'
import './ProductInfoFC.css'

export const ProductInfoFC = ({ info, remove , edit}) => {
    return (
        <div className='col-md-4 mb-4'>
            <div className='card text-white bg-dark border-danger text-center' >
                <div className='card-header'>
                    Product info
                </div>
                <div className='card-body text-danger'>
                    <h5 className="card-title">Name :  {info.name}</h5>
                    <p className="card-text">Price :  {info.price}</p>

                </div>
                <div className='card-footer text-center'>
                    <button className='btn btn-danger btn-sm mr-4' onClick={() => remove(info.id)} >Remove</button>
                    <button className='btn btn-success btn-sm mr-4' onClick={() => edit(info.id , true)}>Edit</button>

                </div>

            </div>
        </div>

    )
}
