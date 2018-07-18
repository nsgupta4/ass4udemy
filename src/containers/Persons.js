import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';
class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeleteHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAddHandler: (name, age) => dispatch({type: 'ADD', personData: {name:name, age: age} }),
        onDeleteHandler: (id) => dispatch({type: 'DELETE', id:id })      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);