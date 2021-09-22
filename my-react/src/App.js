import React, {Component} from 'react';
import Person from './Person/Person'; 
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Hűbele Balázs', age: 26 },
      { name: 'János', age: 58 },
      { name: 'Kocka Karesz', age: 20 }
    ]
  }

  render() {
    
    return (
      <div className="App">
        <h1>Sziasztok!</h1>
        <p>Bekezdés</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbim az informatika!</Person>
      </div>
    );
    
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Sziasztok!'));
  } 
}

export default App;
