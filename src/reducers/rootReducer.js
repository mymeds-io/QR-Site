import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const initialState = {
    tvUser: null,
    viewUserEmail: '',
    viewUserAuthToken: '',
    viewUserId: null,
    isLogged: false,
    mfaQRCode: null,
    loading: false,
    viewUserPtId: null,
    viewUserPtToken: '',
    error: null,
    count: 0
}

function rootReducer( state = initialState, action){

    switch(action.type) {
        case "MAKE_REQUEST":
            return {...state, loading: true}
        case "ADD_CREATED_TV_USER":
            return {...state, loading: false, isLogged: true, tvUser: action.payload}
        case "ADD_LOGGED_TV_USER":
            return {...state, loading: false, isLogged: true, tvUser: action.payload}
        case "ADD_MFA_QR_CODE":
            return {...state, loading: false, mfaQRCode: action.payload}
        case "LOGIN_VIEW_USER":
            return {...state, loading: false, isLogged: true, viewUserEmail: action.payload.viewUserEmail, viewUserAuthToken: action.payload.viewUserAuth, viewUserId: action.payload.viewUserId}
        case "LOGOUT_VIEW_USER":
            return {...state, loading: false, isLogged: false, viewUserEmail: '', viewUserAuthToken: '', viewUserId: null, viewUserPtId: null, viewUserPtToken: '', error: null, count: 0}
        case "GET_USER":
            return { ...state, loading: false, user: action.payload }
        case "ERROR":
            return { ...state, loading: false, error: action.payload.error }
        case "ADD_PT":
            return { ...state, loading: false, viewUserPtId: action.payload.ptId, viewUserPtToken: action.payload.ptToken}
        default:
            return state;
    }

}

const persistConfig = {
    key: 'root',
    storage
}

export default persistReducer(persistConfig, rootReducer);