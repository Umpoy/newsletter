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
        axios.post("/send", data).then(res => {
            console.log(res);
            console.log(res.data);
        });
        this.setState({ email: '' })
    }

    render() {
        return (
            <div className="form">
                <form action="get" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} placeholder="Please Enter Your Email" />
                    </div>
                    <button type="submit" className="btn btn-light submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default Form;