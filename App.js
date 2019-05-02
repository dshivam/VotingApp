import React, { Component } from 'react';
import Home from './src/components/Home';
import './App.scss';

class App extends Component {
   
    render() {
        return(
           <div className="my-app">
                <Home/>
           </div>
        );
    }
}
export default App;
    