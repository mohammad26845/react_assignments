import React, { useRef, useState } from 'react'
import './ProductEditFC.css'

export const ProductEditFC = ({ info, cancel, save }) => {


    const [name, setName] = useState(info.name);
    const [price, setPrice] = useState(info.price);


    // Function for Getting the textbox values
    const nameBox = useRef(null);
    const priceBox = useRef(null);


    // Function for save new data in edit mode
    const saveEditItem = () => {

        // If textboxes were null return 0;
        if (name === "" || price ===""){
            window.alert("Please complete the data!");
            return;
        }
        
        // new variable by new value
        const newItem = {id:info.id , name , price , editMode : false}

        save (newItem);
    }


    return (
        <div className='col-md-4 mb-4'>
            <div className='card bg-info border-black text-center' >
                <div className='card-header'>
                    Product Edit
                </div>

                <div className='card-body text-back'>
                    <h5 className="card-title">Name : <input onChange={() => setName(nameBox.current.value)} ref={nameBox} name='name' className='smaller-input' defaultValue={info.name} /></h5>
                    <p className="card-text">Price : <input onChange={() => setPrice(parseInt(priceBox.current.value))} ref={priceBox} name='price' className='smaller-input' defaultValue={info.price} /></p>
                </div>

                <div className='card-footer text-center'>
                    <button className='btn btn-success btn-sm mr-4' onClick={() => saveEditItem()} >Save</button>
                    <button className='btn btn-danger btn-sm mr-4' onClick={() => cancel(info.id, false)}>Cancel</button>
                </div>

            </div>
        </div>

    )
}
