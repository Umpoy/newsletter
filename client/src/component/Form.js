import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '' }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ email: event.target.value })
    }

    handleSubmit(event) {
        alert('hello world')
        event.preventDefault();
    }

    render() {
        return (
            <div className="form">
                <form action="get" onSubmit={this.handleSubmit}>
                    <input type="email" value={this.state.email} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form;