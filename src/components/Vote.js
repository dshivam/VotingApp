import React, {Component} from 'react';

class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedItem: ''
        }
        this.onCheck = this.onCheck.bind(this);
    }
   onCheck(event) {
    this.setState({
        checkedItem: event.target.value
    }
    );
   }

    submitForm (event) {
        const body = {
            id: this.props.data.id,
            option: this.state.checkedItem
        };
        const url = 'http://localhost:1010/updateVotes';
        this.props.onSubmit(url, body); 
        event.preventDefault();
    }
    render() {
           return (
        <div className="vote">
            <p className="poll-question">{this.props.data.pollQuestion}</p>
            <form onSubmit={(event) => {this.submitForm(event)}}>
                {this.props.data.options.map((item) => {
                    return (
                    <div className="row">
                    <input className="options" type="radio" name="option" value={item.option} onClick={(event) => {this.onCheck(event)}}/>
                    <p>{item.option}</p><br/>
                    </div>                       
                    );
                })}
                <input className="submit" type="submit" value="Submit"/>
            </form>
        </div>
           );
    }
}
export default Vote;


