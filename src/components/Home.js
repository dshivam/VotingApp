import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import PollsList from './PollsList';
import PollResult from './PollResults';
import MyPolls from './MyPolls';
import CreateNewPoll from './CreateNewPoll';
import Header from './Header';


class Home extends Component {
    PollsListComponent(props) {
        return(
            <div className="container col-10 mx-auto">
             <Header {...props}/>
            <PollsList/>
            </div>
        );
    }
    PollsResultComponent(props) {
        return(
            <div className="container col-10 mx-auto">
             <Header {...props}/>
            <PollResult {...props}/>
            </div>
        );
    }
    MyPollsComponent(props) {
        return(
            <div className="container col-10 mx-auto">
             <Header {...props}/>
            <MyPolls/>
            </div>
        );
    }
    CreateNewPollComponent(props) {
        return(
            <div className="container col-10 mx-auto">
             <Header {...props}/>
            <CreateNewPoll/>
            </div>
        );
    }
    render() {
        return(
           <div className="home">
               <div className="row">
               <BrowserRouter>
                       <Switch>
                            <Route exact path='/' render={(props) => {return this.PollsListComponent(props)}}/>
                            <Route path='/poll-details/:id' render={(props) => {return this.PollsResultComponent(props)}}/>
                            <Route path='/my-polls' render={(props) => {return this.MyPollsComponent(props)}}/>
                            <Route path='/new-poll' render={(props) => {return this.CreateNewPollComponent(props)}}/>
                        </Switch>
                </BrowserRouter>
               </div>
           </div>
        );
    }
}

export default Home;
