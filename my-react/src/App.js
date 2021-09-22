import React, {Component} from 'react';
//import React, {useState} from 'react';
import Person from './Person/Person'; 
import './App.css';


class App extends Component {
  state = {
    persons: [
      { name: 'Hűbele Balázs', age: 26 },
      { name: 'János', age: 58 },
      { name: 'Kocka Karesz', age: 20 }
    ],
    masikState: 'másik state'
  }

  nameChangeHandler = (ujNev) => {
    console.log(this.state);
    this.setState({
      persons: [
        { name: ujNev, age: 26 },
        { name: 'János', age: 34 },
        { name: 'Kocka Károly', age: 20 }
      ]
    });
    console.log(this.state);
  }

  nevValtozasKezelo = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 26 },
        { name: event.target.value, age: 34 },
        { name: event.target.value, age: 20 }
      ]
    });
  }

  render() {
    const stilus = {
      backgroundColor: '#efefef',
      font: 'inherit',
      border: '2px dashed red',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>Sziasztok!</h1>
        <p>Bekezdés</p>
        <button style={stilus} onClick={this.nameChangeHandler.bind(this, 'Teszt')}>Nevet módosít</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.nameChangeHandler.bind(this, 'Hübele Bazsi')}
          change={this.nevValtozasKezelo}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={(event) => this.nameChangeHandler('Csak Balázs')}
          change={this.nevValtozasKezelo}
        />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          change={this.nevValtozasKezelo}
        >
            Hobbim az informatika!
        </Person>
      </div>
    );
    
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Sziasztok!'));
  } 
}

export default App;

/*
const App = props => {
  
    const [aktualisState, ujState] = useState({
      persons: [
        { name: 'Hűbele Balázs', age: 26 },
        { name: 'János', age: 58 },
        { name: 'Kocka Karesz', age: 20 }
      ],
      masikState: 'másik state'
    });

    const nameChangeHandler = () => {
      ujState({
        persons: [
          { name: 'Hűbele Balázs', age: 26 },
          { name: 'János', age: 34 },
          { name: 'Kocka Károly', age: 20 }
        ]
      });
    }

    return (
      <div className="App">
        <h1>Sziasztok!</h1>
        <p>Bekezdés</p>
        <button onClick={nameChangeHandler}>Nevet módosít</button>
        <Person name={aktualisState.persons[0].name} age={aktualisState.persons[0].age}/>
        <Person name={aktualisState.persons[1].name} age={aktualisState.persons[1].age}/>
        <Person name={aktualisState.persons[2].name} age={aktualisState.persons[2].age}>Hobbim az informatika!</Person>
      </div>
    );
}

export default App;
*/

