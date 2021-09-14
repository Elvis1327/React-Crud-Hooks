import { TYPES } from "../../TYPES/types"

export const initialState = {
    users: [],
    loading: true
}

export const crudReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.getAllUsers:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case TYPES.createUser:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case TYPES.deleteOneUser:
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.payload)
            };
        case TYPES.editOneUser:
            return {
                ...state,
                users: state.users.map( user => (user._id === action.payload._id) ? (action.payload) : (user) )
            }
        default:
            return state
    };
};




