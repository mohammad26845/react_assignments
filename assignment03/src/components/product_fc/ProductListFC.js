import React, { useEffect, useState } from 'react'
import { ProductEditFC } from './ProductEditFC';
import { ProductInfoFC } from './ProductInfoFC';

// Hard-code variable
const initalItems = [
    { id: 110, name: "Product 23", price: 20, editMode: false },
    { id: 111, name: "Product 24", price: 53, editMode: false },
    { id: 112, name: "Product 25", price: 35, editMode: false },
    { id: 113, name: "Product 26", price: 900, editMode: false },
    { id: 114, name: "Product 27", price: 140, editMode: false },
    { id: 115, name: "Product 28", price: 27, editMode: false }];


export const ProductListFC = () => {

    const [items, setItems] = useState(initalItems);


    useEffect(() => {
        // componentDidMount
        console.log('DidMount FC');

        // If the variable [input] exists and changes THEN...
        // componentDidUpdate
        console.log('DidUpdate FC');

        return () => {
            // componentWillUnmount
            console.log('WillUnmount FC');
        }
    }, [items])



    // Remove function
    const removeItem = (id) => {
        if (window.confirm("Are you sure remove this item?!")) {
            setItems([...items.filter(q => q.id !== id)]);
        }
    }



    // Enable editable mode
    const changeEditMode = (id, mode) => {
        let temp = [...items];
        const index = items.findIndex(q => q.id === id);
        if (mode) {
            temp[index].editMode = true;
            setItems([...temp]);
        }
        else {
            temp[index].editMode = false;
            setItems([...temp]);
        }
    }


    // Edit current items
    const editItem = (item) => {
        let temp = [...items];
        const index = items.findIndex(q => q.id === item.id);
        temp[index] = item;
        setItems([...temp]);
    }


    return (

        <div className="container my-4">
            <h3 className='text-center mb-5'>
                <strong>Products List based on (function component)</strong>
            </h3>

            <div className='row'>

                {items.map((item, i) =>
                    item.editMode ?
                        <ProductEditFC key={item.id} info={item} save={editItem} cancel={changeEditMode}  />
                        : <ProductInfoFC key={item.id} info={item} remove={removeItem} edit={changeEditMode} />)}
            </div>
        </div>

    )
}
