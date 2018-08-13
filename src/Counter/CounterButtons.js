import React from 'react'

class CounterButtons extends React.Component {

    AddHandler = () => {
 
    }

    SubHandler = () => {

    }

    render() {
        return (
            <div>
                <button
                    onClick={this.AddHandler}
                >
                    Add
                </button>
                <button
                    onClick={this.SubHandler}
                >
                    Sub
                </button>
            </div>

        )
    }
}

export default CounterButtons