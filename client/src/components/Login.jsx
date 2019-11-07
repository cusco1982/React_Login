import React, { Component } from 'react';
import axios from "axios"



export default class Signup extends Component {
    state = {
        email: "",
        password: ""
    };


    handleSubmit = (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        axios.post({
            url: "/authentication/signup",
            method: 'POST',
            data: {
                email,
                password
            }
        })
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <div>
                <form>
                    <input type="text" name="email" onChange={this.handleChange} />
                    <input type="password" name="password" onChange={this.handleChange} />
                    <button>Signup</button>
                </form>
            </div>
        )
    }

}