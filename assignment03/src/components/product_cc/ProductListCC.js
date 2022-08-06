import React, { Component } from 'react'
import ProductInfoCC from './ProductInfoCC';

// Hard-code variable
const initalItems = [
    { id: 101, name: "Product 1", price: 100 },
    { id: 102, name: "Product 2", price: 50  },
    { id: 103, name: "Product 3", price: 200 },
    { id: 104, name: "Product 4", price: 600 },
    { id: 105, name: "Product 5", price: 100 },
    { id: 106, name: "Product 6", price: 30  }];


export default class ProductListCC extends Component {


    state = { items: initalItems };


    componentDidMount() {
        console.log('DidMount CC');
    }


    componentDidUpdate() {
        console.log('DidUpdate CC');
    }

    componentWillUnmount() {
        console.log('WillUnmount CC');
    }


    // Remove item
    removeItem = (id) => {
        if (window.confirm("Are you sure remove this item?!")) {
            this.setState({ items: this.state.items.filter(q => q.id !== id) });
        }
    }

    render() {
        return (

            <div className="container my-4">

                <h3 className='text-center mb-5'>
                    <strong>Products List based on (class component)</strong>
                </h3>

                <div className='row'>
                    {this.state.items.map((item, i) =>
                        <ProductInfoCC key={item.id} info={item} remove={this.removeItem} />
                    )}
                </div>

            </div>

        )
    }
}
