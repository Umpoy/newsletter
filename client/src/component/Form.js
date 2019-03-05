import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '' }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ email: event.target.value })
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {
            email: this.state.email
        }
        axios.post("http://localhost:5000/send", data).then(res => {
            console.log(res);
            console.log(res.data);
        })
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