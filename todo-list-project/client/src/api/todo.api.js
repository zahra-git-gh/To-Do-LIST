import {
    getData,
    postData,
    updateData,
    deleteData
} from '../utils/fetcher';
const BASE_URL=import.meta.env.VITE_API_URL;

export const getAllTodos=async (token)=>{
    try {
        console.log(BASE_URL+'/todo');
        console.log(token);
        const todos=await getData(`${BASE_URL}/todo`, token)
        return todos
    } catch (error) {
        throw new Error(error)
    }
};

export const postTodo=async (data, token)=>{
    try {
        console.log(data, token);
        console.log(token);
        const todo=await postData(`${BASE_URL}/todo`,data, token)
        return todo
    } catch (error) {
        throw new Error(error)
    }
};

export const updateTodo=async (id, data, token)=>{
    try {
        const todo=await updateData(`${BASE_URL}/todo/${id}`,data, token)
        return todo
    } catch (error) {
        throw new Error(error)
    }
};

export const getAllTodosOfOneDirectory=async (directoryId,token)=>{
    try {
        const todos=await getData(`${BASE_URL}/todo/directory/${directoryId}`, token)
        return todos
    } catch (error) {
        throw new Error(error)
    }
};

export const deleteTodo=async (id, token)=>{
    try {
        const todo=await deleteData(`${BASE_URL}/todo/${id}`, token)
        return todo
    } catch (error) {
        throw new Error(error)
    }
};