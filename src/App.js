import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {value: ''};

  inputNameHandler = (event) => {
    this.setState({
      value: event.target.value
    });
  }
  
  render() {
    return (
      <div className="App">
        <h2>Welcome to All</h2>
        <UserInput changed={this.inputNameHandler}/>
        <UserOutput taskName='Clean the mess' userName={this.state.value} priority='Urgent'/>
        <UserOutput taskName='Call the mayor' userName='Jack Black' priority='Normal'/>
      </div>
    );
  }
}

export default App;
