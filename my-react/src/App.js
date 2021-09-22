import React, {Component} from 'react';
import Person from './Person/Person'; 
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <h1>Sziasztok!</h1>
        <p>Bekezdés</p>
        <Person name="Hűbele Balázs" age="26"/>
        <Person name="János" age="58"/>
        <Person />
      </div>
    );
    
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Sziasztok!'));
  } 
}

export default App;
