import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, pts: [] }
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, pts: action.payload }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, pts: [] }
        default:
            return state
    }
}

export default function useFetchPts(viewUserId) {
    const [ state, dispatch ] = useReducer(reducer, { pts: [], loading: true })

    let data = '';

    let config = {
        method: 'get',
        url: `https://morning-headland-04700.herokuapp.com/http://dev.mymedsapi.com/user/viewuser/patients/${viewUserId}`,
        headers: { 
            'x-api-key': 'Pk6P3i0CVQLkgpgeQmqp'
        },
        data : data
    };
    
    useEffect(() => {
            console.log("Now fetching view user's pt list");
    
            dispatch({ type: ACTIONS.MAKE_REQUEST })
            axios(config)
                .then(function (response) {
                dispatch({ type: ACTIONS.GET_DATA, payload: response.data })
            })
                .catch(function (e) {
                dispatch({ type: ACTIONS.ERROR, payload: { error: e }})
            });
            
    }, [])

    return state;
}