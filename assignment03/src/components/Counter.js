import React, { PureComponent } from 'react'

export default class Counter extends PureComponent {

    // setState
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    componentDidMount() {
        console.log('DidMount Counter');
    }

    componentDidUpdate() {
        console.log('DidUpdate Counter');
    }

    render() {
        return (

            <div className="container my-4">
                <h3 className='text-center mb-3'>
                    <strong>Test (Pure component)</strong>
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
