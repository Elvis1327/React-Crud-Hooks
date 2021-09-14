import { useReducer } from 'react';
import { crudContext } from './crudContext';
import { crudReducer, initialState } from './crudReducer';
import { editUserFetch, createOneUserFetch, deleteOneUserFetch } from '../../helpers/crud-fetch';
import { TYPES } from '../../TYPES/types';

export const CrudProvider = ({ children }) => {
    const [ value, dispatch ] = useReducer(crudReducer, initialState);
    // Crear Usuario
    const createUserDispatch = async (body) => {
        const resp = await createOneUserFetch(body);
        dispatch({
            type: TYPES.createUser,
            payload: resp.usuario
        });
    };
    // Actualizar Usuario
    const updateOneUserDispatch = async (body) => {
        const resp = await editUserFetch(body);
        dispatch({
            type: TYPES.editOneUser,
            payload: resp.user
        });
    };
    // Delete One User
    const deleteOneUserDispatch = async (id) => {
        const resp = await deleteOneUserFetch(id);
        dispatch({
            type: TYPES.deleteOneUser,
            payload: resp.deletedUser._id
        });
    };

    return (
        <crudContext.Provider value={{
            value,
            dispatch,
            updateOneUserDispatch,
            createUserDispatch,
            deleteOneUserDispatch
        }}>
            {children}
        </crudContext.Provider>
    )
};

