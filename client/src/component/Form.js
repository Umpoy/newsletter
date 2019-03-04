import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '' }

        this.onFormChange = this.onFormChange.bind(this);
    }

    onFormChange(event) {
        console.log(event.target.value);
        this.setState({ email: event.target.value })
    }

    render() {
        return (
            <div className="form">
                <form action="get">
                    <input type="email" value={this.state.email} onChange={this.onFormChange} />
                </form>
            </div>
        )
    }
}

export default Form;