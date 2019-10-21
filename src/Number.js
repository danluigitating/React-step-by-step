import React from 'react';

class Number extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ counter: 1 })}>HELLO WORLD!</button>
                <p>Number: {this.state.counter}</p>
            </div>

        );
    }
}
export default Number;