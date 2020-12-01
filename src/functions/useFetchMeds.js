import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const BASE_URL = 'http://localhost:5000/';

function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, meds: []}
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, meds: action.payload.meds, name: action.payload.name, age: action.payload.age }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, meds: [] }
        default:
            return state
    }
}

export default function useFetchMeds(userId) {
    const [ state, dispatch ] = useReducer(reducer, { meds: [], loading: true, name: "", age: "" })

    useEffect(() => {
        console.log("Now fetching user's med list");

        dispatch({ type: ACTIONS.MAKE_REQUEST })
        axios.get(BASE_URL + `${userId}`)
        .then(res => {
            console.log("Response from Greg's server: ", res)
            dispatch({ type: ACTIONS.GET_DATA, payload: res.data.data })
        })
        .catch(e => {
            console.log("An error occurred while fetching user's medications: ", e)
            dispatch({ type: ACTIONS.ERROR, payload: { error: e }})
        })
    }, [userId])

    return state;
}