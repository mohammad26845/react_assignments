import React from 'react'
import { useRef } from 'react';
import './BookList.css'

export const BooksList = () => {

    // Variable for counter
    var i = 1;

    // Creating multi-value variable
    var [BookList, setItem] = React.useState([
        { name: 'Book title 1', pages: "10" },
        { name: 'Book title 2', pages: "85" },
        { name: 'Book title 3', pages: "64" },
        { name: 'Book title 4', pages: "210" },
    ]);

    // Function for Getting the textbox value
    const inputRefName = useRef(null);
    const inputRefPages = useRef(null);

    // Function for adding a new book 
    const addNewData = () => {
        
        var BookName = inputRefName.current.value;
        var BookPages = inputRefPages.current.value;

        // If textboxes were null return 0;
        if (BookName === "" || BookPages ===""){
            return;
        }

        // Push Items or Set Items (Rest parameters)
        setItem([...BookList, { name: BookName, pages: BookPages }])

        // Remove values after insert data
        inputRefName.current.value = "";
        inputRefPages.current.value = "";
    }

    return (
        <>
            <div className='inputData'>
                <input ref={inputRefName} type="text" id="name" name="bname" placeholder='Name'></input>
                <input ref={inputRefPages} type="text" id="pages" name="bpages" placeholder='Pages'></input>
                <button onClick={() => addNewData()}>Insert your data</button>
            </div>

            <div className='booksList'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Pages</th>
                        </tr>
                    </thead>
                    <tbody>
                        {BookList.map(book =>
                            <tr>
                                <td>{i++}</td>
                                <td>{book.name}</td>
                                <td>{book.pages}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
