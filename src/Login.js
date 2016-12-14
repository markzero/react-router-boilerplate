import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.onFormSubmit}>
                    <p>
                        <input type="text" name="" placeholder="" />
                    </p>
                    <p>
                        <input type="submit" value="Submit" />
                    </p>
                </form>
            </div>
        );
    }

    onFormSubmit(e) {
        e.preventDefault();
    }
}

export default Login;
