import React, { Component } from 'react'

export default class Counter2 extends Component {

    // setState
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    // retuen TRUE or FALSE
    shouldComponentUpdate(nextProps, nextState) {

        // console.log(nextProps, nextState);
        // console.log(this.props, this.state);

        if (nextState.counter === this.state.counter){
            return false
        }
        else{
            return true;
        }
        
    }

    componentDidMount() {
        console.log('DidMount Counter 2');
    }

    componentDidUpdate() {
        console.log('DidUpdate Counter 2');
    }

    render() {
        return (

            <div className="container my-4">
                <h3 className='text-center mb-3'>
                    <strong>Test (Should component)</strong>
                </h3>

                <div className="col-md-3 mb-3 input_counter" >
                    <input type="text" className="form-control" placeholder="Insert counter value"
                        onChange={(event) => this.setState({ counter: parseInt(event.target.value) })} />
                </div>

                <div>
                    Counter is : {this.state.counter}
                </div>
            </div>

        )
    }
}
