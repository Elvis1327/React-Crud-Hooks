import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createOneUserFetch } from '../../helpers/crud-fetch';
import { useForm } from '../../hooks/useForm';
import { crudContext } from '../../context/crud/crudContext';
import { TYPES } from '../../TYPES/types';

export const Create = () => {

    const { id } = useParams();
    const { dispatch, value, updateOneUserDispatch } =  useContext(crudContext);
    const { handleOnChange, inputsData, setInputsData } = useForm({
        _id: '',
        nombre: '',
        email: '',
        sueldo: ''
    });
    const { nombre, email, sueldo } = inputsData;

    useEffect(()=> {
        const usuario = value.users.find(user => user._id === id);
        if(id){
            setInputsData({
                _id: id,
                nombre: usuario.nombre,
                email: usuario.email,
                sueldo: usuario.sueldo
            })
        }else{
            setInputsData({})
        }
    },[id, setInputsData, value])



    const handleSubmit = async (e) => {
        e.preventDefault();
        if(id){
            updateOneUserDispatch(inputsData)
        }else{
            const resp = await createOneUserFetch(inputsData);
            dispatch({
                type: TYPES.createUser,
                payload: resp.usuario
            })
        }
    }


    return (
        <div className="_create-main-container">
            <form className="_form-create" onSubmit={handleSubmit}>
                <h1>Create</h1>
                <div className="inputs">
                    <input 
                        type="text" 
                        className="input"
                        name="nombre"
                        autoComplete="off"
                        placeholder="Introduce Your Name Here"
                        onChange={handleOnChange}
                        value={nombre}
                    />
                </div>
                <div className="inputs">
                    <input 
                        type="text" 
                        className="input"
                        name="email"
                        autoComplete="off"
                        placeholder="Introduce Your Email Here"
                        onChange={handleOnChange}
                        value={email}
                    />
                </div>
                <div className="inputs">
                    <input 
                        type="text" 
                        className="input"
                        name="sueldo"
                        autoComplete="off"
                        placeholder="Introduce Your Sueldo Here"
                        onChange={handleOnChange}
                        value={sueldo}
                    />
                </div>
                <button 
                    type="submit"
                    className="_create-button"
                >
                    {(id) ? ('Edit') : ('Create') }
                </button>
            </form>
        </div>
    )
}