const initialState = 0;
const changeNumReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREAMENT' : return state + action.payload;
        case 'DECREAMENT' : return state - action.payload;
        default : return state
    }
}

export default changeNumReducer;