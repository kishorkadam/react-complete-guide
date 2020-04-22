import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Dnyaneshwar", age: 36 },
      { id: '2', name: "Ganesh", age: 39 },
      { id: '3', name: "Kishor", age: 34 },
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    console.log('In nameChangedHandler..')

    const personIndex = this.state.persons.findIndex(x => { return x.id === id });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    console.log('in togglePersonsHandler.. ')
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    //var persons = this.state.persons.slice();
    console.log('in deletePersonHandler');
    var personsCopy = [...this.state.persons];
    personsCopy.splice(personIndex, 1);
    this.setState({ persons: personsCopy });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      foreColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} age={person.age} key={person.id}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </ div>
      );
      style.backgroundColor = 'red';

      style[':hover'] = {
        backgroundColor: 'orange',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      <div className="App" >
        <h1>Hi, I am React App.</h1>
        <p className={classes.join(' ')} > This is really working.</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons</button>
        {persons}
      </div >
    );
  }
}
export default App;