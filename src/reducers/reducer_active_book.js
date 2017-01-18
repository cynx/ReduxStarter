//state argument is not app state. only the state, this reducer is responsible for.
//need to define state as null, because reducer doesnt expect to return undefined
export default function(state=null,action){
    switch (action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}