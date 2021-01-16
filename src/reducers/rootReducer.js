import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const initialState = {
    user: "Greg",
    loading: false,
    count: 0
}

function rootReducer( state = initialState, action){

    switch(action.type) {
        case "MAKE_REQUEST":
            return {...state, loading: true}
        case "GET_USER":
            return { ...state, loading: false, user: action.payload }
        case "ADD":
            return { ...state, loading: false, count: state.count + 1}
        default:
            return state;
    }

}

const persistConfig = {
    key: 'root',
    storage
}

export default persistReducer(persistConfig, rootReducer);