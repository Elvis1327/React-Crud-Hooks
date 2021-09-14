import { useReducer } from 'react';
import { crudContext } from './crudContext';
import { crudReducer, initialState } from './crudReducer';
import { editUserFetch } from '../../helpers/crud-fetch';
import { TYPES } from '../../TYPES/types';

export const CrudProvider = ({ children }) => {
    const [ value, dispatch ] = useReducer(crudReducer, initialState);

    // Actualizar Usuario
    const updateOneUserDispatch = async (body) => {
        const resp = await editUserFetch(body);
        dispatch({
            type: TYPES.editOneUser,
            payload: resp.user
        })
    }

    return (
        <crudContext.Provider value={{
            value,
            dispatch,
            updateOneUserDispatch
        }}>
            {children}
        </crudContext.Provider>
    )
};

