const INITIAL_STATE = []


const simpsonReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case "ADD_LIST" : 
            console.log('payload',action.payload)
            return [...state, JSON.parse(action.payload)]
            break;
        case "UPDATE_LIST":
            console.log('payload',action.payload)
            return state=action.payload
            break;
        default :
            return state;
            break;
    }
};

export default simpsonReducer;