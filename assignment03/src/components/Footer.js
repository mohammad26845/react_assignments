import React, { PureComponent } from 'react'

export default class Footer extends PureComponent {

    componentDidMount() {
        console.log('DidMount Footer');
    }

    componentDidUpdate() {
        console.log('DidUpdate Footer');
    }

    render() {
        return (
            <p>React version : {this.props.data}</p>
        )
    }
}
