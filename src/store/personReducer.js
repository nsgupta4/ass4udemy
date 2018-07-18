const initialState = {
    persons: [],
};
const personReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                persons: state.persons.concat({id: Math.random(), name: action.personData.name, age: action.personData.age }),
            }
        case 'DELETE':
        const updatedPersons = state.persons.filter(person => person.id !== action.id);
        return {
            ...state,
            persons: updatedPersons,
        }
    }
    return state;
};
export default personReducer;