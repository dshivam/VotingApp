import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createPoll, resetLatestPollStatus} from '../action/index';

class NewPoll extends Component {
    constructor(props) {
        super(props);
            this.state = {
                options: [
                    <div>
                        <input className="poll-option" type="text"/><br/>
                    </div>
                ]
            }
            this.addOption = this.addOption.bind(this);
    }
    addOption() {
        const arr = this.state.options;
        arr.push(<div>
            <input className="poll-option" type="text"/><br/>
        </div>);
        this.setState({
            options: arr
        });
    }
    submitPoll(e) {
        const body = {};
        const colorArray = ['#FF6384', '#36A2EB', '#FFCE56', 'orange', 'skyblue', 'green'];
        body.pollName = document.getElementById('poll-title').value;
        body.creator = localStorage.getItem('loggedInUser');
        body.pollQuestion = document.getElementById('poll-question').value;
        const x = document.querySelectorAll('.poll-option');
        const options  = [];
        for (let i = 0; i < x.length; i += 1) {
            const option  = {};
            option.option = x[i].value;
            option.vote = 0;
            option.color = colorArray[i];
            options.push(option);
        }
        body.options = options;
        const url = 'http://localhost:1010/createNewPoll'
        this.props.createPoll(url, body)
        e.preventDefault();
    }
   componentDidMount() {
    this.props.resetLatestPollStatus();
}
render() {
    if (this.props.newPollStatus === 'successful') {
        return (
            <div className="row newPoll">
                <div className="col-5 mx-auto">
                <div>
                <i className="material-icons success-icon">check_circle_outline</i>
                <p>New Poll created successFully!</p>
            </div>
                </div>
            </div>
        );
    } else if (this.props.newPollStatus === 'Unsuccessful') {
        return (
            <div className="row newPoll">
                <div className="col-5 mx-auto">
                <div>
                <i className="material-icons success-icon">check_circle_outline</i>
                <p>New Poll created successFully!</p>
            </div>
                </div>
            </div>
        );
    }
    return(
        <div className="row newPoll">
        <div className="col-5 mx-auto">
            <form onSubmit={(event) => {this.submitPoll(event)}}>
                <div className="input-box">
                    <p>Poll Title</p>
                    <input id="poll-title" type="text"/>
                </div>
                <div className="input-box">
                    <p>Poll Question</p>
                    <input id="poll-question" type="text"/>
                </div>
                <div className="input-box">
                    <p>Options</p>
                    {this.state.options.map((item) => {
                        return item;
                    })
                    }
                    <i onClick={this.addOption}>Add another option</i>
                </div>
                <div className="input-box">
                    <input type="submit" value="Submit" className="submit" />
                </div>
            </form>
        </div>
    </div>
    );
}
}
const mapStatetoProps = (state) => {
    return({
        newPollStatus: state.newPoll.newPollcreationStatus
    });
    };
    
const mapDispatchtoProps = (dispatch) => {
    return({
        createPoll: (url, body) => {dispatch(createPoll(url,body));},
        resetLatestPollStatus: () => {dispatch(resetLatestPollStatus());}
    });
    };
export default connect(mapStatetoProps, mapDispatchtoProps)(NewPoll);
