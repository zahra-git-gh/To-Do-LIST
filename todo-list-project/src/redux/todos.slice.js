import {createSlice} from '@reduxjs/toolkit';

const initialState={
    directories:[],
    todos:[]
}

const todosSlice=createSlice({
    name:'todos',
    initialState,
    reducers:{
        addDirectory:(state, action)=>{
            state.directories.push(action.payload)
        },
        updateDirectory:(state, action)=>{
            state.directories.map((directory)=>{
                if(directory.id===action.payload.id){
                    directory.name=action.payload.name
                }
                return directory
            })
        },
        deleteDirectory:(state, action)=>{
            state.directories=state.directories.filter((directory)=>directory.id!==action.payload)
        },
        addTodo:(state, action)=>{
            state.todos.push(action.payload)
        },
        updateTodo:(state, action)=>{
            state.todos.map((todo)=>{
                if(todo.id===action.payload.id){
                    todo=action.payload
                }
                return todo
            })
        },
        deleteTodo:(state, action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
})
export const {addDirectory, updateDirectory, deleteDirectory, addTodo, updateTodo, deleteTodo}=todosSlice.actions

export default todosSlice.reducer