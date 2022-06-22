import camelCase from 'camelcase';
import { API_ACTIONS } from './actions';
import ENDPOINTS from './endpoints';


// const ENDPOINTS = {
//     [JOBS]: {
//         uri: '/jobs',
//         method: 'GET'
//     },
//     [EMPLOYEES]: {
//         uri: '/employees',
//         method: 'GET'
//     },

function initApistate() {
    return Object.keys(ENDPOINTS).reduce((acc, next) => {
        const inner = {
            data: null,
            loading: false,
            error: null
        };

        acc[camelCase(next)] = inner;  //присвоили каждому ключу из  ENDPOINTS inner
        return acc;  //получился объект - ключи из  ENDPOINTS: inner
    }, {});
};

const initialState = initApistate();


const apiReducer = (state=initialState, action) => {
   if (action.type.startsWith(API_ACTIONS.FETCH_START)) { //например FETCH_START_JOBS
       const inner = camelCase(action.type.replace(API_ACTIONS.FETCH_START, ''));//эту часть обрезали и ост. JOBS 

       return {
        ...state,
        [inner]: {
            ...state[inner],
            loading: true,
            error: null
        }
       };
    }

    if (action.type.startsWith(API_ACTIONS.FETCH_SUCCESS)) { //например FETCH_SUCCESS_JOBS
        const inner = camelCase(action.type.replace(API_ACTIONS.FETCH_SUCCESS, ''));//эту часть обрезали и ост. JOBS 
 
        return {
            ...state,
            [inner]: {
             ...state[inner],
             data: action.payload,
             loading:false,
             error: null
            }
        };
    }

    if (action.type.startsWith(API_ACTIONS.FETCH_FAILURE)) { //например FETCH_START_FAILURE
        const inner = camelCase(action.type.replace(API_ACTIONS.FETCH_START, ''));//эту часть обрезали и ост. JOBS 
     
        return {
            ...state,
             [inner]: {
                 ...state[inner],
                 loading:false,
                 error: action.payload
            }
        };
    }

    return state
}

export default apiReducer;