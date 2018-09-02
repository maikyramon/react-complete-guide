import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';



class App extends Component {
  state = {
    persons: [
      { id: 'asd1', name: 'Max', age: 28 },
      { id: 'dsa2', name: 'Manu', age: 29 },
      { id: 'sad3', name: 'Lua', age: 26 }
    ], 
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); // copia o array inteiro ao invéz de passar a referencia
    //const persons = [...this.state.persons]; alternativa;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green', 
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curson: 'pointer',      
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}          
        </div> 
      );

      style.backgroundColor = 'red';
    }

    const classes = [];

    if (this.state.persons.length <= 2){
      classes.push('red');
    }

    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi!!!!!!!!!!!!!!</h1>
          <p className={classes.join(' ')}>This is working!</p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle persons
          </button>
          {persons}  
        </div>
    );
  }
}

export default App;
