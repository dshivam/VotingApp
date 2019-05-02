import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchAllPolls} from '../action/index';

class PollsList extends Component {
   componentDidMount() {
    this.props.fetchPollList('http://localhost:1010/listAllPolls');
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
            <div className="polls-header">
                <h2>All Polls</h2>
                <p>Below are all the polls hosted by Voting App</p>
                <p>Select a poll to see the results or Login to vote and create new poll</p>
            </div>
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
        pollsList: state.pollsReducer.pollsList
    };
    };
    
const mapDispatchtoProps = (dispatch) => {
    return {
        fetchPollList: (url) => {dispatch(fetchAllPolls(url));}
    }
    };
    export default connect(mapStatetoProps, mapDispatchtoProps)(PollsList);
