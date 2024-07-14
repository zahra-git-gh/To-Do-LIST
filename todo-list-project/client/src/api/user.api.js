import {
 getData,
 postData,
 updateData
} from '../utils/fetcher';
const BASE_URL=import.meta.env.VITE_API_URL;
export const registerUser=async (data)=>{
    console.log(data);
    console.log(BASE_URL);
    try {
        const newUser=await postData(`${BASE_URL}/user`, data)
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
};

export const loginUser=async (data)=>{
    try {
        const token=await postData(`${BASE_URL}/user/login`, data)
        return token;
    } catch (error) {
        throw new Error(error)
    }
};

export const updateUser=async (data, token)=>{
    try {
        const updated=await updateData(`${BASE_URL}/user`, data, token)
        return updated;
    } catch (error) {
        throw new Error(error)
    }
};

export const getUser=async (token)=>{
    try {
        const user=await getData(`${BASE_URL}/user`, token)
        return user;
    } catch (error) {
        throw new Error(error)
    }
}