import React from 'react';
import { connect } from 'react-redux'

import { add, sub, reset } from './store'

const mapDispatchToProps = (dispatch) => ({
    isaAdd: (number) => dispatch(add(number)),
    isaSub: (number) => dispatch(sub(number)),
    isaReset: () => dispatch(reset())
})

class CounterButtons extends React.Component {
    state = {
        inputValue: 0
    }

    handlerChange = (event) => {
        this.setState({ inputValue: parseInt(event.target.value ? event.target.value : 0) })
    }

    render() {
        return (
            <div>
                <input
                    type='number'
                    placeholder='number'
                    value={this.state.inputValue}
                    onChange={this.handlerChange}
                />
                <button
                    onClick={() => this.props.isaAdd(this.state.inputValue)}
                >
                    Add
                </button>
                <button
                    onClick={() => this.props.isaSub(this.state.inputValue)}
                >
                    Sub
                </button>
                <button
                    onClick={() => this.props.isaReset()}
                >
                    Reset
                </button>
            </div>

        )
    }
}

export default connect(null, mapDispatchToProps)(CounterButtons)