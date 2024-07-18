import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { getUser, updateUser } from '../api/user.api';


const initialState={
    token:localStorage.getItem('token')||null,
    userData:{},
    loading:false,
    error:false
}
export const fetchUser=createAsyncThunk('user/fetchUser', async(token)=>{
    try {
        const user=await getUser(token);
        return user[0];
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
})
export const editUser=createAsyncThunk("user/updateUser", async(obj)=>{
    try {
        const {token, data}=obj;
        const updatedUser=await updateUser(data, token)
        console.log(updatedUser);
        return updatedUser.data; 
    } catch (error) {
        console.log(error);
        throw new Error(error.message)
    }
})
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setToken:(state, action)=>{
            state.token=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.pending, (state)=>{
            state.loading=true;
            state.error=false;
        })
        .addCase(fetchUser.fulfilled, (state, action)=>{
            state.loading=false;
            state.error=false;
            state.userData=action.payload
        })
        .addCase(fetchUser.rejected, (state)=>{
            state.loading=false;
            state.error=true;
        })
        .addCase(editUser.pending, (state)=>{
            state.loading=true;
            state.error=false;
        })
        .addCase(editUser.fulfilled, (state, action)=>{
            state.loading=false;
            state.error=false;
            state.userData=action.payload;
        })
        .addCase(editUser.rejected, (state)=>{
            state.loading=false;
            state.error=true;
        })
    }
})

export const {setToken}=userSlice.actions;

export default userSlice.reducer;