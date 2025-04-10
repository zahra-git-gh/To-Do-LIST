import {
    getData,
    postData,
    updateData,
    deleteData
} from '../utils/fetcher';
const BASE_URL=import.meta.env.VITE_API_URL;

export const getAllDirectory=async (token)=>{
    try {
        const directories=await getData(`${BASE_URL}/directory`, token)
        return directories;
    } catch (error) {
        throw new Error(error)
    }
};

export const postDirectory=async (data, token)=>{
    try {
        const directory=await postData(`${BASE_URL}/directory`, data, token)
        return directory;
    } catch (error) {
        throw new Error(error)
    }
};

export const updateDirectory=async (id, data, token)=>{
    try {
        const directory=await updateData(`${BASE_URL}/directory/${id}`, data, token)
        return directory;
    } catch (error) {
        throw new Error(error)
    }
};

export const deleteDirectory=async (id, token)=>{
    try {
        const directory=await deleteData(`${BASE_URL}/directory/${id}`, token)
        return directory;
    } catch (error) {
        throw new Error(error)
    }
};