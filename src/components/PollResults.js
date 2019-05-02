import React, {Component} from 'react';
import {connect} from 'react-redux';
import Result from './Chart';
import Vote from './Vote';
import {fetchPollDetails, fetchUpdatedPolls} from '../action/index';

 class PollResults extends Component {
    componentDidMount() {
         this.props.fetchPollDetails('http://localhost:1010/getPollDetails/' + this.props.match.params.id);
    }
    render() {
        if (!this.props.pollDetails) {
            return (
                <div />
            );
        }
        const data = this.props.pollDetails;
        return(
        <div className="row all-polls">
        <h className="poll-Name">{data.pollName}</h>
            <div className="col-11 mx-auto">
                <div className="row">
                {localStorage.getItem('loggedInUser') &&
                    <div className="col-lg-6 mx-auto">
                        <Vote 
                        data={data}
                        onSubmit={this.props.fetchUpdatedPolls}/>
                    </div>
                }
                    <div className="col-lg-6 mx-auto">
                        <Result data={data}/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {
        pollDetails: state.pollsReducer.pollDetails,
        loginReducer: state.loginReducer.loggedInUSer
    }
    };
    
const mapDispatchtoProps = (dispatch) => {
    return {
        fetchPollDetails: (url) => {dispatch(fetchPollDetails(url));},
        fetchUpdatedPolls: (url, body) => {dispatch(fetchUpdatedPolls(url,body));}
    }
    };

export default connect(mapStatetoProps, mapDispatchtoProps)(PollResults);
