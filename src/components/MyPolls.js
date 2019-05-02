import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPollDetailsByUser} from '../action/index';

class MyPolls extends Component {
   componentDidMount() {
    this.props.fetchPollList('http://localhost:1010/getPollsByUser/' + localStorage.getItem('loggedInUser'));
}
render() {
    if (!this.props.pollsList) {
        return (
            <div/>
        );
    }
    return(
        <div className="row all-polls">
        <div className="col-11 mx-auto">
        {this.props.pollsList.length != 0 &&        
            <div className="polls-header">
                <h2>Your Polls</h2>
                <p>Below are all the polls created by you</p>
                <p>Select a poll to see the results</p>
            </div>
        }
         {!this.props.pollsList.length &&        
            <div className="polls-header">
                <h2>Your Polls</h2>
                <p>You have not created any polls yet</p>
                <p>Please Go to 'New Poll' Tab to create your own poll.</p>
            </div>
        }
            <div className="polls">
            {this.props.pollsList.map((item) => {
                return (
                    <Link to={'/poll-details/' + item.id}>
                        <div className="poll">
                            <p>{item.pollName}</p>
                        </div>
                    </Link>
                );
            })}
            </div>
        </div>
    </div>
    );
}
}
const mapStatetoProps = (state) => {
    return {
        pollsList: state.pollsReducer.userPollsList
    };
    };
    
const mapDispatchtoProps = (dispatch) => {
    return {
        fetchPollList: (url) => {dispatch(fetchPollDetailsByUser(url));}
    }
    };
export default connect(mapStatetoProps, mapDispatchtoProps)(MyPolls);
