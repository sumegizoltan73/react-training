import React, {Component} from 'react';
//import React, {useState} from 'react';
import Person from './Person/Person'; 
import './App.css';


class App extends Component {
  state = {
    persons: [
      { id: 'kjhjk', name: 'Hűbele Balázs', age: 26 },
      { id: 'asdads', name: 'János', age: 58 },
      { id: 'lkjlkj', name: 'Kocka Karesz', age: 20 }
    ],
    masikState: 'másik state',
    lathatosag: true
  }

  nevValtozasKezelo = (event, id) => {
    const szemelyIndex = this.state.persons.findIndex(aktSzemely => {
      return aktSzemely.id === id;
    });
    const szemely = {
      ...this.state.persons[szemelyIndex]
    };

    // ES5: const szemely = Object.assign({}, this.state.persons[szemelyIndex]);
    
    szemely.name = event.target.value;
    const szemelyek = [...this.state.persons];
    szemelyek[szemelyIndex] = szemely;

    this.setState({
      persons: szemelyek
    });
  }

  kapcsolo = () => {
    const lathato = this.state.lathatosag;
    this.setState({ lathatosag: !lathato });
  }

  personDeleteHandler = (personIndex) => {
    // ES5: const szemelyek = this.state.persons.slice();
    const szemelyek = [...this.state.persons];
    szemelyek.splice(personIndex, 1);
    this.setState({persons: szemelyek});
  }

  render() {
    const stilus = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '2px solid gray',
      padding: '8px',
      cursor: 'pointer',
      color: 'white'
    };
    
    let persons = null;

    if (this.state.lathatosag) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return(
                <Person
                  key={person.id} 
                  name={person.name} 
                  age={person.age} 
                  delete={() => this.personDeleteHandler(index)} 
                  change={(event) => this.nevValtozasKezelo(event, person.id)}
                />
              )
            })
          }
          
        </div>
      );

      stilus.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>Sziasztok!</h1>
        <p>Bekezdés</p>
        <button style={stilus} onClick={this.kapcsolo}>Kapcsoló</button>
        
        {persons}

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

