import React, {Component} from 'react';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.onInput = this.onInput.bind(this);
    }
    onInput(e) {
        this.setState(
            {
                input: e.target.value
            }
        );
    }
    submit(e) {
        this.props.onSubmit(this.state.input);
        this.props.onClose();
        e.preventDefault();
    }
    render() {
        return (
            <div className="loginForm">
            <form onSubmit={(event) => {this.submit(event)}}>
                <input className="text-box" type="text" placeholder="Enter your username" onChange={(event) => {this.onInput(event);}} required/><br/>
                <input className="submit" type="submit" value="Submit"/>
            </form>
        </div>
        );
    }
}