import { useState } from 'react';

export const useForm = (initialState) => {

    const [  inputsData, setInputsData ] = useState(initialState);
    
    const handleOnChange = (e) => {
        setInputsData({
            ...inputsData,
            [e.target.name]: e.target.value 
        });
    };



    return { handleOnChange , inputsData, setInputsData }

}




