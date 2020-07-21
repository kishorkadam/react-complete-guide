import React, { Component } from 'react';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit';
import classes from './App.module.css';
import withClass from './components/HOC/withClass';
import Aux from './components/HOC/Aux';
class App extends Component {

    constructor(props) {
        super(props);
        console.log('App.js constructor');
    }

    state = {
        persons: [
            { id: '1', name: "Dnyaneshwar", age: 36 },
            { id: '2', name: "Ganesh", age: 39 },
            { id: '3', name: "Kishor", age: 34 },
        ],
        showPersons: false,
        showCockpit: true,
        counter: 1,
        authenticated: false
    }

    static getDerivedStateFromProps(props, state) {
        console.log('App.js getDerivedStateFromProps');
        return state;
    }
    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(x => { return x.id === id });
        const person = { ...this.state.persons[personIndex] };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState((previousState, props) => {
            return {
                persons: persons,
                counter: previousState.counter + 1
            }
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    deletePersonHandler = (personIndex) => {
        var personsCopy = [...this.state.persons];
        personsCopy.splice(personIndex, 1);
        this.setState({ persons: personsCopy });
    }

    render() {
        console.log('[App.js render]');
        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
                auth={this.authenticated} />;

        }
        return (
            <Aux>
                <button onClick={() => { this.setState({ showCockpit: false }) }}>Show Cockpit</button>
                {
                    this.state.showCockpit ?
                        <Cockpit title={this.props.appTitle}
                            showPersons={this.state.showPersons ? 1 : 0}
                            persons={this.state.persons}
                            clicked={this.togglePersonsHandler} />

                        : null
                }
                {persons}
            </Aux>
        )
    }
    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }
}

export default withClass(App, classes.App); 