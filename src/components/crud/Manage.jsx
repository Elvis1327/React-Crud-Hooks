import React, { useContext, useEffect } from 'react';
import { getAllUsers } from '../../helpers/crud-fetch';
import { Link } from 'react-router-dom';
import { crudContext } from '../../context/crud/crudContext';
import { TYPES } from '../../TYPES/types';

export const Manage = () => {

    const { value, deleteOneUserDispatch, dispatch } = useContext(crudContext);
    
    useEffect(() => {
        getAllUsers().then(res => {
            dispatch({
                type: TYPES.getAllUsers,
                payload: res.users
            });
        });
    }, [ dispatch ]);

    return (
        <div className="_manage-main-container">
            {value.loading === true
            ?
            <div className="loading"></div>
            :
            <table className="table">
                {value.users.length === 0
                ?
                    <div className="alert alert-danger">
                        No hay Usuarios Disponibles, debe crear uno <Link to="/create"> Aqui</Link>
                    </div>
                :
                    <>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Sueldo</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {value.users.map(user => (
                            <tr key={user._id}>
                                <td>{user.nombre}</td>
                                <td>{user.email}</td>
                                <td>{user.sueldo}</td>
                                <td>
                                    <Link
                                        to={`/edit/${user._id}`}
                                        className="_edit-button"
                                    >
                                        Editar
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        className="_delete-button"
                                        onClick={() => deleteOneUserDispatch(user._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </>
                }
            </table>
            }
        </div>
    )
}


