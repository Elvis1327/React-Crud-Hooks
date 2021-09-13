import React from 'react';
import { createOneUserFetch } from '../../helpers/crud-fetch';
import { useForm } from '../../hooks/useForm';
import { useParams } from 'react-router-dom';

export const Create = () => {

    const resp = useParams();
    console.log(resp)

    const { handleOnChange, inputsData } = useForm({
        _id: '',
        nombre: '',
        email: '',
        sueldo: ''
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        await createOneUserFetch(inputsData)
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
                    />
                </div>
                <button 
                    type="submit"
                    className="_create-button"
                >
                    create
                </button>
            </form>
        </div>
    )
}