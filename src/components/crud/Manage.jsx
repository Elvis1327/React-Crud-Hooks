import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { deleteOneUserFetch } from '../../helpers/crud-fetch';
import { Link } from 'react-router-dom';

export const Manage = () => {

    const { loading, usuarios } = useFetch();

    const deleteOneUser = async (id) => {
        await deleteOneUserFetch(id);
        const result = usuarios.filter(user => user._id !== id);
        console.log(result)
        return result;
    };



    return (
        <div className="_manage-main-container">
            {loading === true
            ?
            <div className="loading"></div>
            :
            <table className="table">
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
                    {usuarios.map(user => (
                        <tr key={user._id}>
                            <td>{user.nombre}</td>
                            <td>{user.email}</td>
                            <td>{user.sueldo}</td>
                            <td>
                                <Link
                                    to={`/create/${user._id}`}
                                    className="_edit-button"
                                >
                                    Editar
                                </Link>
                            </td>
                            <td>
                                <button
                                    className="_delete-button"
                                    onClick={() => {deleteOneUser(user._id)}}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            }
        </div>
    )
}


