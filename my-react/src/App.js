import React, { Component } from "react";
//import React, {useState} from 'react';
import Person from "./Person/Person";
import Awesome from "./Awesome/Awesome";
import ComponentC from "./components/ComponentC";
import ParentComponent from "./components/ParentComponent";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import UserForm from "./components/UserForm";
import "./App.css";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CustomContext = React.createContext();

class App extends Component {
  state = {
    persons: [
      { id: "kjhjk", name: "Hűbele Balázs", age: 26 },
      { id: "asdads", name: "János", age: 58 },
      { id: "lkjlkj", name: "Kocka Karesz", age: 20 },
    ],
    masikState: "másik state",
    lathatosag: true,
  };

  customValue = {
    id: 12,
    name: 'jhfjhg'
  };

  nevValtozasKezelo = (event, id) => {
    const szemelyIndex = this.state.persons.findIndex((aktSzemely) => {
      return aktSzemely.id === id;
    });
    const szemely = {
      ...this.state.persons[szemelyIndex],
    };

    // ES5: const szemely = Object.assign({}, this.state.persons[szemelyIndex]);

    szemely.name = event.target.value;
    const szemelyek = [...this.state.persons];
    szemelyek[szemelyIndex] = szemely;

    this.setState({
      persons: szemelyek,
    });
  };

  kapcsolo = () => {
    const lathato = this.state.lathatosag;
    this.setState({ lathatosag: !lathato });
  };

  personDeleteHandler = (personIndex) => {
    // ES5: const szemelyek = this.state.persons.slice();
    const szemelyek = [...this.state.persons];
    szemelyek.splice(personIndex, 1);
    this.setState({ persons: szemelyek });
  };

  render() {
    const stilus = {
      backgroundColor: "green",
      font: "inherit",
      border: "2px solid gray",
      padding: "8px",
      cursor: "pointer",
      color: "white",
    };

    let persons = null;

    if (this.state.lathatosag) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                delete={() => this.personDeleteHandler(index)}
                change={(event) => this.nevValtozasKezelo(event, person.id)}
              />
            );
          })}
        </div>
      );

      stilus.backgroundColor = "red";
    }

    let classes = [];

    if (this.state.persons.length === 3) {
      classes.push("red");
      classes.push("bold");
    } else {
      classes = [];
    }

    return (
      <div className="App">
        <h1 className={classes.join(" ")}>Sziasztok!</h1>
        <p>Bekezdés</p>
        <button style={stilus} onClick={this.kapcsolo}>
          Kapcsoló
        </button>

        {persons}

        <Awesome init="1" />

        <UserContext.Provider value={"Vishwas"}>
          <ChannelContext.Provider value={"Codevolution"}>
            <CustomContext.Provider value={this.customValue}>
              <ComponentC />
            </CustomContext.Provider>
          </ChannelContext.Provider>
        </UserContext.Provider>

        <ParentComponent />

        <Counter />

        <h2>useRef hook</h2>
        <FocusInput />
        <ClassTimer />
        <HookTimer />

        <h2>customs hooks</h2>
        <h3>useDocumentTitle hook</h3>
        <DocTitleOne />
        <DocTitleTwo />

        <h3>useCounter hook</h3>
        <CounterOne />
        <CounterTwo />

        <h3>useInput hook</h3>
        <UserForm />
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
