import axios from 'axios';

const MAIN_URL = 'https://crud-practice13.herokuapp.com';

// GET ALL USERS
export const getAllUsers = async () => {
    const { data } = await axios.get(`${MAIN_URL}/api/get-all`);
    return data;
};
// CREATE ONE USER
export const createOneUserFetch = async (body) => {
    const { data } = await axios.post(`${MAIN_URL}/api/create-user`, body);
    return data;
};
// DELETE USER
export const deleteOneUserFetch = async (id) => {
    const { data } = await axios.delete(`${MAIN_URL}/api/delete-user/${id}`);
    return data;
}


