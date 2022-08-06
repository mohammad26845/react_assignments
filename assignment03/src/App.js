import React, { Fragment, useState } from 'react';
import './App.css';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import ProductListCC from './components/product_cc/ProductListCC';
import { ProductListFC } from './components/product_fc/ProductListFC';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Counter2 from './components/Counter2';


const App = () => {
  const [showFunctionComponent, setShowFunctionComponent] = useState(true);

  return (
    <Fragment>

      {/* For Call and Test a pure component */}
      {/* Dynamic data */}
      <div className='text-center mb-3 mt-3'>
        <Counter />
      </div>

      <hr />

      {/* For Test should component */}
      <div className='text-center mb-3 mt-3'>
        <Counter2 />
      </div>

      <hr />

      <div className='text-center mt-2 mb-2'>
        <button className='btn btn-primary mr-4' onClick={() => setShowFunctionComponent(true)}>Show Function Component</button>
        <button className='btn btn-primary mr-4' onClick={() => setShowFunctionComponent(false)}>Show Class Component</button>
      </div>

      {showFunctionComponent ? <ProductListFC /> : <ProductListCC />}


      {/* For Call and Test a pure component */}
      {/* Static data */}
      <div className='text-center'>
        <Footer data = {React.version} />
      </div>

    </Fragment>

  )
}

export default App

