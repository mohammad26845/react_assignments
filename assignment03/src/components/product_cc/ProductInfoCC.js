import React, { Component } from 'react'

export default class ProductInfoCC extends Component {

    // Input props from parent
    data = this.props.info;

    render() {
        return (
            <div className='col-md-4 mb-4'>
                <div className='card text-white bg-dark border-danger text-center' >

                    <div className='card-header'>
                        Product info
                    </div>

                    <div className='card-body text-danger'>

                        <h5 className="card-title">Name :  {this.data.name}</h5>
                        <p className="card-text">Price :  {this.data.price}</p>

                    </div>

                    <div className='card-footer text-center'>
                        <button className='btn btn-danger btn-sm mr-4' onClick={() => this.props.remove(this.data.id)}>Remove</button>
                        <button className='btn btn-success btn-sm mr-4' disabled>Edit</button>
                    </div>

                </div>
            </div>
        )
    }
}
