import React, {Component} from 'react';     
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {loginAction, logoutAction} from '../action/index';
import Form from './LoginForm';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.onClickLogin = this.onClickLogin.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onLogOut = this.onLogOut.bind(this);
    }
    onClickLogin() {
        this.setState({
            showModal: true,
            login: true
        });
    }
    handleClose() {
        this.setState({
            showModal: false
        });
    }
    onLogOut() { 
        this.props.logout();
        window.location.href = 'http://localhost:9090';
    }
render() {
    let tabs = ['Home'];
    let headingGrids;
    let display;
    let login;
    if (localStorage.getItem('loggedInUser')) {
       tabs.push('My Polls');
       tabs.push('New Poll');
       headingGrids = 10 - tabs.length;
       display = true;
       login = localStorage.getItem('loggedInUser');
    } else {
        headingGrids = 10;
        login = 'Login';
        display = false;
    }
    return(
    <div>
    <div className="row header">
        <h className={'col-lg-' + headingGrids + ' heading'}> Voting App</h>
        {tabs.map((item) => {
            const link = item === 'Home'?'/':'/' + item.split(' ').join('-').toLowerCase();
            const tabClass = this.props.match.path === link?'tab-active':'tab';
            return (
                <div className={'col-lg-1 '+tabClass}>
            <Link to={link}>
            <p>{item}</p>
            </Link>
            </div>
            );
        })}
        {!display &&
        <div className="login-button col-lg-1" id="login" role="button" onClick={this.onClickLogin}>{login}</div>
        }
        {display &&
        <div className="login-button col-lg-1">{login}</div>
        }
        {display &&
        <div className="login-button col-lg-1" role="button" onClick={this.onLogOut}>Log Out</div>
        }
    </div>
    {this.state.showModal &&
       <Form 
       onSubmit={this.props.login}
       onClose={this.handleClose}
       />
    }
    </div>
    );
}
}
const mapStatetoProps = (state) => {
    return {
        loggedInUSer: state.loginReducer.loggedInUSer
    };
    };

const mapDispatchtoProps = (dispatch) => {
    return {
        login: (userName) => {dispatch(loginAction(userName));},
        logout: () => {dispatch(logoutAction());}
    }
    };

export default connect(mapStatetoProps, mapDispatchtoProps)(Header);